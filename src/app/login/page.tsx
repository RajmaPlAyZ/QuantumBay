import { baseURL, login } from "@/resources";
import {
    Column,
    Heading,
    Meta,
    RevealFx,
    Row,
    Schema,
    Text,
} from "@once-ui-system/core";
import LoginForm from "./LoginForm";

export async function generateMetadata() {
  return Meta.generate({
    title: login.title,
    description: login.description,
    baseURL: baseURL,
    path: login.path,
    image: login.image,
  });
}

export default function Login() {
  return (
    <Column maxWidth="s" gap="xl" paddingY="12" horizontal="center" paddingX="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={login.path}
        title={login.title}
        description={login.description}
        image={`/api/og/generate?title=${encodeURIComponent(login.title)}`}
      />
      
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {login.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {login.subline}
            </Text>
          </RevealFx>
        </Column>
      </Column>

      <RevealFx translateY="16" delay={0.4}>
        <Column
          background="surface"
          border="neutral-alpha-weak"
          radius="m"
          padding="l"
          gap="l"
          fillWidth
        >
          <Column gap="m">
            <Heading variant="heading-strong-l">Sign In</Heading>
            <Text onBackground="neutral-weak" variant="body-default-l">
              Access your hosting dashboard and manage your services
            </Text>
          </Column>
          <LoginForm />
          <Row horizontal="center" paddingTop="m">
            <Text variant="body-default-s" onBackground="neutral-weak" align="center">
              Don't have an account?{" "}
              <a 
                href="/signup" 
                style={{
                  color: 'var(--brand-on-background-strong)',
                  textDecoration: 'none',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
              >
                Sign Up
              </a>
            </Text>
          </Row>
        </Column>
      </RevealFx>
    </Column>
  );
}
