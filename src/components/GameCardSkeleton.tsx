import { Card, CardBody, HStack, Skeleton } from "@chakra-ui/react"

const GameCardSkeleton = () => {
  return (

    <Card  borderRadius={10}>
        <Skeleton minWidth={"300px"} height="200px" />
        <CardBody>
          <HStack justifyContent="space-between">
            <Skeleton height="20px" width="70%" />
            <Skeleton height="20px" width="10%" />
            </HStack></CardBody>
    </Card>)
}

export default GameCardSkeleton