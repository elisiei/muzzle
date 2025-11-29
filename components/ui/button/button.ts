import { cva } from "styled-system/css";
import { styled } from "styled-system/jsx";

export const buttonStyles = cva({
	base: {
		fontWeight: "semibold",
		display: "flex",
		justifyContent: "center",
		w: "fit",
		rounded: "xl",
		px: 4,
		py: 1.5,
		cursor: "pointer",
		transition: "all 0.120s ease-out",
		position: "relative",
		overflow: "hidden",
		_hover: {
			scale: 1.05
		},
		_active: {
			scale: 0.95
		}
	},
	variants: {
		isIcon: {
			true: {
				px: 3,
				py: 3
			}
		},
		variant: {
			primary: {
				bg: "sky.500",
				color: "gray.950",
				_hover: {
					bg: "sky.600",
				}
			},
			secondary: {
				bg: "transparent",
				color: "gray.400",
				_hover: {
					bg: "gray.800",
					color: "gray.200"
				}
			}
		}
	},
	defaultVariants: {
		variant: "primary",
		isIcon: false
	}
});

export const Button = styled("button", buttonStyles);

