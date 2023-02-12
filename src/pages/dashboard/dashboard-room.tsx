import { Box, Card, Grid, Heading,Text,Image } from "@chakra-ui/react";

const DashboardRoom = () => {
    return ( 
        <> 
        <Text size='xl'>Example data</Text>      
        <Box p={10}>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            <Card p={5} shadow="md" borderWidth="1px">
            <Image src="https://www.melivecode.com/attractions/1.jpg" alt="Placeholder" />
              <Heading as="h3" mt={5} mb={2}>
                Room Title 1
              </Heading>
              <Text>
                Phi Phi Islands are a group of islands in Thailand between the large island of Phuket and the Malacca Coastal Strait of Thailand.
              </Text>
            </Card>
            <Card p={5} shadow="md" borderWidth="1px">
            <Image src="https://www.melivecode.com/attractions/2.jpg" alt="Placeholder" />
              <Heading as="h3" mt={5} mb={2}>
                Room Title 2
              </Heading>
              <Text>
                Eiffel Tower is one of the most famous structures in the world. Eiffel Tower is named after a leading French architect and engineer. It was built as a symbol of the World Fair in 1889.
              </Text>
            </Card>
            <Card p={5} shadow="md" borderWidth="1px">
            <Image src="https://www.melivecode.com/attractions/3.jpg" alt="Placeholder" />
              <Heading as="h3" mt={5} mb={2}>
                Room Title 3
              </Heading>
              <Text>
                Times Square has become a global landmark and has become a symbol of New York City. This is a result of Times Square being a modern, futuristic venue, with huge advertising screens dotting its surroundings.
              </Text>
            </Card>
            <Card p={5} shadow="md" borderWidth="1px">
            <Image src="https://www.melivecode.com/attractions/4.jpg" alt="Placeholder" />
              <Heading as="h3" mt={5} mb={2}>
                Room Title 4
              </Heading>
              <Text>
                Mount Fuji is the highest mountain in Japan, about 3,776 meters (12,388 feet) situated to the west of Tokyo. Mount Fuji can be seen from Tokyo on clear days.
              </Text>
            </Card>
            <Card p={5} shadow="md" borderWidth="1px">
            <Image src="https://www.melivecode.com/attractions/5.jpg" alt="Placeholder" />
              <Heading as="h3" mt={5} mb={2}>
                Room Title 5
              </Heading>
              <Text>
                Westminster Palace Clock Tower which is most often referred to as Big Ben. This is actually the nickname for the largest bell that hangs in the vent above the clock face.
              </Text>
            </Card>
            <Card p={5} shadow="md" borderWidth="1px">
            <Image src="https://www.melivecode.com/attractions/6.jpg" alt="Placeholder" />
              <Heading as="h3" mt={5} mb={2}>
                Room Title 6
              </Heading>
              <Text>
                The Taj Mahal or Tachomhal is a burial building made of ivory white marble. The Taj Mahal began to be built in 1632 and was completed in 1643.
              </Text>
            </Card>
          </Grid>
        </Box>
        </>
    );
}
 
export default DashboardRoom;