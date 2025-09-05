import {
  Heading,
  Text,
  Column,
  Row,
  Schema,
  Meta,
  RevealFx,
  Button,
} from "@once-ui-system/core";
import { auth, baseURL } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: auth.title,
    description: auth.description,
    baseURL: baseURL,
    path: auth.path,
    image: auth.image,
  });
}

export default function Auth() {
  return (
    <Column maxWidth="s" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={auth.path}
        title={auth.title}
        description={auth.description}
        image={`/api/og/generate?title=${encodeURIComponent(auth.title)}`}
      />
      
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {auth.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {auth.subline}
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
            <Heading variant="heading-strong-l">Login</Heading>
            <Text onBackground="neutral-weak" variant="body-default-l">
              Sign in to your account to access your dashboard
            </Text>
          </Column>
          <form action="/api/authenticate" method="POST">
            <Column gap="m">
              <Column gap="s">
                <Text variant="label-default-s">Email</Text>
                <input
                  type="email"
                  name="email"
                  id="login-email"
                  required
                  placeholder="Enter your email address"
                  style={{
                    padding: '0.75rem',
                    border: '1px solid var(--neutral-alpha-weak)',
                    borderRadius: 'var(--radius-m)',
                    background: 'var(--surface-background)',
                    color: 'var(--neutral-on-background-strong)',
                    fontSize: 'var(--body-default-m)',
                  }}
                />
              </Column>
              <Column gap="s">
                <Text variant="label-default-s">Password</Text>
                <input
                  type="password"
                  name="password"
                  id="login-password"
                  required
                  placeholder="Enter your password"
                  style={{
                    padding: '0.75rem',
                    border: '1px solid var(--neutral-alpha-weak)',
                    borderRadius: 'var(--radius-m)',
                    background: 'var(--surface-background)',
                    color: 'var(--neutral-on-background-strong)',
                    fontSize: 'var(--body-default-m)',
                  }}
                />
              </Column>
              <Row horizontal="end">
                <Button
                  type="submit"
                  variant="primary"
                  size="m"
                  weight="default"
                  arrowIcon
                >
                  Sign In
                </Button>
              </Row>
            </Column>
          </form>
        </Column>
      </RevealFx>

      <RevealFx translateY="16" delay={0.6}>
        <Column
          background="surface"
          border="neutral-alpha-weak"
          radius="m"
          padding="l"
          gap="l"
          fillWidth
        >
          <Column gap="m">
            <Heading variant="heading-strong-l">Sign Up</Heading>
            <Text onBackground="neutral-weak" variant="body-default-l">
              Create a new account to get started
            </Text>
          </Column>
          <form action="/api/register" method="POST">
            <Column gap="m">
              <Row gap="m" s={{ direction: "column" }}>
                <Column flex={1} gap="s">
                  <Text variant="label-default-s">First Name</Text>
                  <input
                    type="text"
                    name="firstName"
                    id="signup-firstname"
                    required
                    placeholder="Enter your first name"
                    style={{
                      padding: '0.75rem',
                      border: '1px solid var(--neutral-alpha-weak)',
                      borderRadius: 'var(--radius-m)',
                      background: 'var(--surface-background)',
                      color: 'var(--neutral-on-background-strong)',
                      fontSize: 'var(--body-default-m)',
                    }}
                  />
                </Column>
                <Column flex={1} gap="s">
                  <Text variant="label-default-s">Last Name</Text>
                  <input
                    type="text"
                    name="lastName"
                    id="signup-lastname"
                    required
                    placeholder="Enter your last name"
                    style={{
                      padding: '0.75rem',
                      border: '1px solid var(--neutral-alpha-weak)',
                      borderRadius: 'var(--radius-m)',
                      background: 'var(--surface-background)',
                      color: 'var(--neutral-on-background-strong)',
                      fontSize: 'var(--body-default-m)',
                    }}
                  />
                </Column>
              </Row>
              <Column gap="s">
                <Text variant="label-default-s">Email</Text>
                <input
                  type="email"
                  name="email"
                  id="signup-email"
                  required
                  placeholder="Enter your email address"
                  style={{
                    padding: '0.75rem',
                    border: '1px solid var(--neutral-alpha-weak)',
                    borderRadius: 'var(--radius-m)',
                    background: 'var(--surface-background)',
                    color: 'var(--neutral-on-background-strong)',
                    fontSize: 'var(--body-default-m)',
                  }}
                />
              </Column>
              <Column gap="s">
                <Text variant="label-default-s">Password</Text>
                <input
                  type="password"
                  name="password"
                  id="signup-password"
                  required
                  placeholder="Create a password"
                  style={{
                    padding: '0.75rem',
                    border: '1px solid var(--neutral-alpha-weak)',
                    borderRadius: 'var(--radius-m)',
                    background: 'var(--surface-background)',
                    color: 'var(--neutral-on-background-strong)',
                    fontSize: 'var(--body-default-m)',
                  }}
                />
              </Column>
              <Column gap="s">
                <Text variant="label-default-s">Confirm Password</Text>
                <input
                  type="password"
                  name="confirmPassword"
                  id="signup-confirm-password"
                  required
                  placeholder="Confirm your password"
                  style={{
                    padding: '0.75rem',
                    border: '1px solid var(--neutral-alpha-weak)',
                    borderRadius: 'var(--radius-m)',
                    background: 'var(--surface-background)',
                    color: 'var(--neutral-on-background-strong)',
                    fontSize: 'var(--body-default-m)',
                  }}
                />
              </Column>
              <Row horizontal="end">
                <Button
                  type="submit"
                  variant="primary"
                  size="m"
                  weight="default"
                  arrowIcon
                >
                  Create Account
                </Button>
              </Row>
            </Column>
          </form>
        </Column>
      </RevealFx>
    </Column>
  );
}
