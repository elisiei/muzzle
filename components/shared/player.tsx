import { IconArrowsShuffle2, IconPlayerPlayFilled, IconPlayerTrackNextFilled, IconPlayerTrackPrevFilled, IconRepeat, IconVolume, IconVolumeOff } from "@tabler/icons-react";
import { Button } from "components/ui/button/button";
import { css, cx } from "styled-system/css";
import { Box, HStack, Stack } from "styled-system/jsx";
import QueueMenu from "./queue-menu";

const song = {
	cover: "https://lastfm.freetls.fastly.net/i/u/770x0/08e715c0f5f7e77f6f1c6014e0f3e7d4.jpg",
	title: "4 Raws",
	artist: "EsDeeKid",
	album: "Rebel"
}

export default function Player() {
	return (
		<Box className={cx(PlayerBoxStyles, "group")}>
			<HStack>
				<Button rounded="full" isIcon>
					<IconPlayerPlayFilled />
				</Button>
				<Button px={1.5} py={1.5} rounded="full" variant="secondary">
					<IconArrowsShuffle2 size={20} />
				</Button>
				<Button px={1.5} py={1.5} rounded="full" variant="secondary">
					<IconRepeat size={20} />
				</Button>
			</HStack>
			<HStack w="1/3">
				<Button px={2} py={1.5} rounded="full" variant="secondary">
					<IconPlayerTrackPrevFilled size={20} />
				</Button>
				<Stack gap={1} w="full">
					<HStack>
						<img src={song.cover} alt={song.album} className={AlbumCoverStyles} />
						<Stack gap={0}>
							<h3 className={css({ fontSize: "sm", fontWeight: "semibold" })}>{song.title}</h3>
							<span className={css({ fontSize: "xs", color: "gray.300" })}>{song.artist} · {song.album}</span>
						</Stack>
					</HStack>
					<Box cursor={"pointer"} pos="relative" w="full" h={1} transitionDuration="fast">
						<Box h={"full"} w={"1/2"} bg={"gray.200"} pos="absolute" rounded="full" />
						<Box h={"full"} w={"full"} bg={"gray.500"} rounded="full" />
					</Box>
				</Stack>
				<Button px={2} py={1.5} rounded="full" variant="secondary">
					<IconPlayerTrackNextFilled size={20} />
				</Button>
			</HStack>
			<HStack>
				<QueueMenu />
				<IconVolumeOff size={20} />
				<Box h={1} w={24} bg={"gray.300"} rounded="full" />
				<IconVolume size={20} />
			</HStack>
		</Box>
	)
}

const AlbumCoverStyles = css({
	w: 12,
	h: 12,
	rounded: "sm"
})

const PlayerBoxStyles = css({
	p: 2,
	w: "full",
	rounded: "full",
	border: "1px solid",
	borderColor: "gray.800",
	bg: "gray.900/50",
	backdropBlur: "xl",
	backdropFilter: "auto",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	position: "absolute",
	bottom: 5
})
