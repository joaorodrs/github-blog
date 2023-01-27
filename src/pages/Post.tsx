import { Box, Button, Center, Flex, Heading, HStack, Icon, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { FaComment } from "react-icons/fa"
import { FiCalendar, FiChevronLeft, FiExternalLink, FiGithub } from "react-icons/fi"
import ReactMarkdown from "react-markdown"
import { useNavigate, useParams } from "react-router-dom"
import { Post } from "../@types/post"
import api from "../services/api"
import { daysFromNow } from "../utils/transform"

export default function PostPage() {
  const { id: postId } = useParams()
  const navigate = useNavigate()

  const [post, setPost] = useState<Post>({} as Post)

  const getPost = async () => {
    if (!postId) return

    try {
      const response = await api.get(`/repos/joaorodrs/blog-mock/issues/${postId}`)

      setPost(response.data)
    } catch(err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getPost()
  }, [postId])

  return (
    <Box as="main" mt={-12}>
      <Box bgColor="base.profile" rounded="xl" py={8} px={10} alignItems="center">
        <Flex alignItems="center" justifyContent="space-between">
          <Button
            variant="link"
            size="sm"
            colorScheme="brand"
            leftIcon={<Icon as={FiChevronLeft} />}
            onClick={() => navigate('/')}
          >
            VOLTAR
          </Button>
          <Button
            variant="link"
            rightIcon={<Icon as={FiExternalLink} />}
            size="sm"
            colorScheme="brand"
            onClick={() => window.open(post.html_url, '_blank')}
          >
            VER NO GITHUB
          </Button>
        </Flex>
        <Heading fontSize="24px" color="base.title" mt={5}>{post.title}</Heading>
        <HStack mt={6} gap={6}>
          <Center gap={2}>
            <Icon as={FiGithub} color="base.label" />
            <Text color="base.span">{post.user?.login}</Text>
          </Center>
          <Center gap={2}>
            <Icon as={FiCalendar} color="base.label" />
            <Text color="base.span">{daysFromNow(post.created_at)}</Text>
          </Center>
          <Center gap={2}>
            <Icon as={FaComment} color="base.label" />
            <Text color="base.span">{post.comments} comentário{post.comments > 1 ? 's' : ''}</Text>
          </Center>
        </HStack>
      </Box>
      <Box mt={5} px={10}>
        <Text
          as={ReactMarkdown}
          color="base.text"
        >
          {post.body}
        </Text>
      </Box>
    </Box>
  )
}