import { Menu } from "@base-ui-components/react";
import { IconList } from "@tabler/icons-react";
import { Button } from "components/ui/button/button";
import { css } from "styled-system/css";

export default function QueueMenu() {
	return (
		<Menu.Root>
			<Menu.Trigger>
				<Button px={1.5} py={1.5} rounded="full" variant="secondary">
					<IconList size={20} />
				</Button>
			</Menu.Trigger>
			<Menu.Portal>
				<Menu.Positioner sideOffset={8}>
					<Menu.Popup className={MenuPopupStyles}>
						<Menu.Item className={MenuItemStyles}>add to library</Menu.Item>
					</Menu.Popup>
				</Menu.Positioner>
			</Menu.Portal>
		</Menu.Root>
	)
}

const MenuPopupStyles = css({
	position: "relative",
	bg: "gray.900",
	border: "1px solid",
	borderColor: "gray.800",
	p: 1,
	borderRadius: "xl",
	animation: "fade-in 0.5s cubic-bezier(.25, .9, .25, 1)",
});

const MenuItemStyles = css({
	px: "4",
	py: "2",
	rounded: "lg",
	bg: {
		base: "transparent",
		_hover: "gray.800"
	},
	cursor: "pointer",
})
