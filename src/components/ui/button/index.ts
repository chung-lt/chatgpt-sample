import { cva, type VariantProps } from 'class-variance-authority';

export { default as Button } from './Button.vue';

export const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    {
        variants: {
            variant: {
                default: 'rounded-3xl bg-primary text-primary-foreground hover:bg-primary/90',
                destructive: 'text-red-500 hover:bg-accent/90',
                outline:
                    'border rounded-3xl border-input bg-background hover:bg-accent hover:text-accent-foreground',
                secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'text-primary underline-offset-4 hover:underline'
            },
            size: {
                default: 'h-10 px-3 py-2',
                xs: 'h-7 rounded px-2',
                sm: 'h-9 rounded-2xl px-3',
                lg: 'h-11 rounded-md px-7 py-7',
                full: 'h-10 w-full px-2 [&>span]:grow font-normal text-left space-x-2 [&>i]:text-lg',
                bigicon: 'h-10 h-10 text-3xl',
                icon: 'h-10 w-10 text-xl',
                smicon: 'h-5 w-5 text-xs'
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        }
    }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
