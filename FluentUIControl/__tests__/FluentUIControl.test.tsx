import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FluentUIControl } from '../FluentUIControl';

describe('FluentUIControl', () => {
    const mockContext = {
        parameters: {
            tooltipContent: { raw: 'Test tooltip content' },
            useEnvironmentVariable: { raw: 'false' },
            iconPosition: { raw: 'right' },
            tooltipStyle: { raw: 'plainText' }
        },
        mode: {
            isControlDisabled: false
        }
    } as any;

    const defaultProps = {
        context: mockContext,
        value: 'Test Value',
        onChange: jest.fn(),
        disabled: false
    };

    it('renders without crashing', () => {
        render(<FluentUIControl {...defaultProps} />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('displays tooltip content on hover', async () => {
        render(<FluentUIControl {...defaultProps} />);
        const button = screen.getByRole('button');
        fireEvent.mouseEnter(button);
        expect(await screen.findByText('Test tooltip content')).toBeInTheDocument();
    });

    it('respects icon position setting', () => {
        const leftPositionProps = {
            ...defaultProps,
            context: {
                ...mockContext,
                parameters: {
                    ...mockContext.parameters,
                    iconPosition: { raw: 'left' }
                }
            }
        };

        render(<FluentUIControl {...leftPositionProps} />);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('leftIcon');
    });

    it('renders HTML content when tooltipStyle is html', async () => {
        const htmlProps = {
            ...defaultProps,
            context: {
                ...mockContext,
                parameters: {
                    ...mockContext.parameters,
                    tooltipContent: { raw: '<div><strong>Bold</strong> content</div>' },
                    tooltipStyle: { raw: 'html' }
                }
            }
        };

        render(<FluentUIControl {...htmlProps} />);
        const button = screen.getByRole('button');
        fireEvent.mouseEnter(button);
        const content = await screen.findByText(/Bold content/);
        expect(content).toBeInTheDocument();
        expect(content.innerHTML).toContain('<strong>');
    });
});
