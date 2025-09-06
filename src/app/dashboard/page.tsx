import { Flex, Text } from "@once-ui-system/core";

export default function Dashboard() {
  return (
    <Flex direction="column" gap="l" padding="l">
      <Text size="xl" weight="default">
        Dashboard
      </Text>
      <Text>
        Welcome to your dashboard! This is where you can manage your account and access your services.
      </Text>
    </Flex>
  );
}
