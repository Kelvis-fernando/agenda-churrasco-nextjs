import {
  Card,
  Heading,
  Flex,
  Box,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Users, CurrencyCircleDollar } from '@phosphor-icons/react';
import ModalBqqDetails from './ModalBqqDetails';
import { format } from 'date-fns';

const BbqCard = ({ barbecue }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Card
        onClick={onOpen}
        p="10"
        m="3"
        display="flex"
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        borderRadius="sm"
        boxShadow="lg"
        width=" 282px"
        height=" 192px"
      >
        <Box justifyContent="flex-start" w="100%">
          <Heading>{format(new Date(barbecue.newBbq!.date), 'dd/MM')}</Heading>
          <Text fontWeight="semibold" mt="3">
            {barbecue.newBbq.title}
          </Text>
        </Box>
        <Flex justifyContent="space-around" w="100%" mt="10">
          <Flex alignItems="center">
            <Users size={24} color="#FFD836" />
            <Text fontWeight="semibold">
              {barbecue.newBbq.participants.length - 1}
            </Text>
          </Flex>
          <Flex alignItems="center">
            <CurrencyCircleDollar size={24} color="#FFD836" />
            <Text fontWeight="semibold">R${barbecue.newBbq.value}</Text>
          </Flex>
        </Flex>
      </Card>
      <ModalBqqDetails
        barbecue={barbecue}
        onCloseModal={onClose}
        isOpenModal={isOpen}
      />
    </>
  );
};

export default BbqCard;
