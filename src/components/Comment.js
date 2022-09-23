import React from 'react';
import { Flex, Text, Image, Button } from '@aws-amplify/ui-react';

export default function Comment(){
    return (
      <Flex direction="row">
        <Flex direction="column">
          <Button>+</Button>
          <Text>12</Text>
          <Button>-</Button>
        </Flex>
        <Flex direction="column">
          <Flex direction="row">
            <Image />
            <Text>amyrobson</Text>
            <Text>1 month ago</Text>
            <Flex direction="row">
              <Image />
              <Button>Reply</Button>
            </Flex>
          </Flex>
          <Text>Impresive!kfjgbgjdshjfgdsjhfhjsbjhgbj</Text>
        </Flex>
      </Flex>
    );
}