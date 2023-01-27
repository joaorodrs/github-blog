import { useMemo } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { differenceInDays, parseISO } from 'date-fns'
import ReactMarkdown from "react-markdown";
import { Post } from "../@types/post";
import { daysFromNow } from "../utils/transform";

type Props = Post & {
  onClickPost(id: number): void;
}

export default function PostComponent({ number, title, body, created_at, onClickPost }: Props) {
  return (
    <Box
      as="button"
      textAlign="left"
      h="260px"
      bgColor="base.post"
      w="100%"
      rounded="xl"
      p={8}
      overflow="hidden"
      position="relative"
      border="1px solid"
      transition="border 0.1s"
      _hover={{
        border: '1px solid',
        borderColor: 'base.label'
      }}
      sx={{
        ':after': {
          content: '""',
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "-15px",
          right: "-15px",
          boxShadow: "0 -30px 30px 5px inset var(--chakra-colors-base-post)",
        }
      }}
      onClick={() => onClickPost(number)}
    >
      <Flex justifyContent="space-between">
        <Heading color="base.title" fontSize="20px">{title}</Heading>
        <Text as="span" fontSize="14px" color="base.span" minW="100px" textAlign="right">{daysFromNow(created_at)}</Text>
      </Flex>
      <Text
        as={ReactMarkdown}
        mt={5}
        color="base.text"
        overflowY="hidden"
        textOverflow="ellipsis"
        zIndex={0}
        disallowedElements={['link', 'a']}
        unwrapDisallowed={true}
      >
        {body}
      </Text>
    </Box>
  )
}