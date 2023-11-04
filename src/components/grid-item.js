import { Global } from "@emotion/react"
import { Route } from 'react-router-dom'
import Homepage from './Homepage'
import { Box, Text, LinkBox, LinkOverlay, Image } from '@chakra-ui/react'


export const GridItem = ({ children, id, href, title, thumbnail }) => (
    <Box w="100%" align="center">
        <Route path={`/posts/${id}`} element={<Homepage />}>
            <LinkBox cursor='pointer'>
                <Route href={`posts/${id}`} target="_blank">
                    <Text mt={3}>{title}</Text>
                </Route>
                <Text fontSize={24}>{children}</Text>
            </LinkBox>
        </Route>
    </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
    <Box w="100%" align="center">
    <Route href={`/works/${id}`} passHref scroll={false}>
            <LinkBox cursor="pointer">
                <Image 
                    src={thumbnail} 
                    alt={title} 
                    className="grid-item-thumbnail" 
                    placeholder="blur" 
                />
                <LinkOverlay href={`/works/${id}`}>
                    <Text mt={2} fontSize={20}>
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={14}>{children}</Text>
            </LinkBox>
        </Route>
    </Box>
)

export const GridItemStyle = () => (
    <Global styles={`
    .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
    />
)
