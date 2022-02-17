import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Yan Soares</Text>
        <Text color="gray.300" fontSize="small">
          yts.1995@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Yan Soares" src="https://github.com/yants95.png" />
    </Flex>
  )
}