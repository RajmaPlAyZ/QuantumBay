import { baseURL, signup } from "@/resources";
import {
    Button,
    Column,
    Heading,
    Meta,
    RevealFx,
    Row,
    Schema,
    Text,
} from "@once-ui-system/core";

export async function generateMetadata() {
  return Meta.generate({
    title: signup.title,
    description: signup.description,
    baseURL: baseURL,
    path: signup.path,
    image: signup.image,
  });
}

export default function Signup() {
  return (
    <Column maxWidth="s" gap="xl" paddingY="12" horizontal="center" paddingX="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={signup.path}
        title={signup.title}
        description={signup.description}
        image={`/api/og/generate?title=${encodeURIComponent(signup.title)}`}
      />
      
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {signup.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {signup.subline}
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
            <Heading variant="heading-strong-l">Create Account</Heading>
            <Text onBackground="neutral-weak" variant="body-default-l">
              Join Quantum Bay and start managing your cloud hosting services
            </Text>
          </Column>
          <form action="/api/register" method="POST">
            <Column gap="m">
              <Row gap="m">
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
                      width: '100%',
                      boxSizing: 'border-box',
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
                      width: '100%',
                      boxSizing: 'border-box',
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
                    width: '100%',
                    boxSizing: 'border-box',
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
                    width: '100%',
                    boxSizing: 'border-box',
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
                    width: '100%',
                    boxSizing: 'border-box',
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
                  fillWidth
                >
                  Create Account
                </Button>
              </Row>
            </Column>
          </form>
          <Row horizontal="center" paddingTop="m">
            <Text variant="body-default-s" onBackground="neutral-weak" align="center">
              Already have an account?{" "}
              <a 
                href="/login" 
                style={{
                  color: 'var(--brand-on-background-strong)',
                  textDecoration: 'none',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
              >
                Sign In
              </a>
            </Text>
          </Row>
        </Column>
      </RevealFx>
    </Column>
  );
}
