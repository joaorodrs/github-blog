import { Box, Button, Center, Flex, Grid, Heading, HStack, Icon, Image, Text } from "@chakra-ui/react";

import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { FaBuilding } from 'react-icons/fa'
import { BsPeopleFill } from 'react-icons/bs'
import SearchForm from "../components/forms/SearchForm";
import PostComponent from "../components/Post";
import { useEffect, useState } from "react";
import api from "../services/api";
import { User } from "../@types/user";
import { Post, PostResponse } from "../@types/post";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate()

  const [user, setUser] = useState<User>({} as User)
  const [posts, setPosts] = useState<Post[]>([])

  const getUser = async () => {
    try {
      const response = await api.get<User>('/users/joaorodrs')

      setUser(response.data)
    } catch (err) {
      console.error(err)
    }
  }

  const getPosts = async (q?: string) => {
    try {
      const params = { q: `${q ? q + ' ' : ''}repo:joaorodrs/blog-mock` }

      const response = await api.get<PostResponse>('/search/issues', { params })

      setPosts(response.data.items)
    } catch(err) {
      console.error(err)
    }
  }

  const handleClickPost = (id: number) => {
    navigate(`post/${id}`)
  }

  useEffect(() => {
    getUser()
    getPosts()
  }, [])

  return (
    <Box as="main" mt={-12}>
      <Flex bgColor="base.profile" rounded="xl" py={8} px={10} alignItems="center">
        <Image src="https://github.com/joaorodrs.png" w="148px" h="148px" rounded="lg" />
        <Box w="100%" ml={8}>
          <Flex justifyContent="space-between">
            <Heading fontSize="24px" color="base.title">{user.name}</Heading>
            <Button
              variant="link"
              rightIcon={<Icon as={FiExternalLink} />}
              size="sm"
              colorScheme="brand"
              onClick={() => window.open(user.html_url, '_blank')}
            >
              GITHUB
            </Button>
          </Flex>
          <Text color="base.text" mt={2}>{user.bio}</Text>
          <HStack mt={6} gap={6}>
            <Center gap={2}>
              <Icon as={FiGithub} color="base.label" />
              <Text color="base.subtitle">{user.login}</Text>
            </Center>
            <Center gap={2}>
              <Icon as={FaBuilding} color="base.label" />
              <Text color="base.subtitle">{user.company}</Text>
            </Center>
            <Center gap={2}>
              <Icon as={BsPeopleFill} color="base.label" />
              <Text color="base.subtitle">{user.followers} seguidores</Text>
            </Center>
          </HStack>
        </Box>
      </Flex>

      <Box mt={16} mb={12}>
        <Flex justifyContent="space-between" mb={3}>
          <Heading fontSize="18px" color="base.title">Publicações</Heading>
          <Text as="span" fontSize="14px" color="base.span">{posts.length} publicaçõe{posts.length > 1 ? 's' : ''}</Text>
        </Flex>
        <SearchForm onSubmit={(values) => getPosts(values.search)} />
      </Box>

      <Grid templateColumns="repeat(2, 1fr)" gap={8} pb={10}>
        {posts.map(post => (
          <PostComponent
            key={post.id}
            onClickPost={handleClickPost}
            {...post}
          />
        ))}
      </Grid>
    </Box>
  )
}