import { baseURL, domain } from "@/resources";
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
    title: domain.title,
    description: domain.description,
    baseURL: baseURL,
    path: domain.path,
    image: domain.image,
  });
}

export default function Domain() {
  return (
    <Column maxWidth="xl" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={domain.path}
        title={domain.title}
        description={domain.description}
        image={`/api/og/generate?title=${encodeURIComponent(domain.title)}`}
      />
      
      {/* Header Section */}
      <Column fillWidth horizontal="center" gap="l">
        <Row horizontal="center" gap="m" vertical="center">
          <Column gap="s" horizontal="center">
            <Heading wrap="balance" variant="display-strong-l">
              {domain.headline}
            </Heading>
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl" align="center">
              {domain.subline}
            </Text>
          </Column>
        </Row>
      </Column>

      {/* Domain Services Grid */}
      <Column fillWidth gap="xl" horizontal="center">
        {/* First Row - 3 Cards */}
        <Row gap="l" horizontal="center" s={{ direction: "column" }}>
          {domain.sections.slice(0, 3).map((section, index) => (
            <RevealFx key={index} translateY="16" delay={index * 0.1}>
              <Column
                className="domain-card"
                background="surface"
                border="neutral-alpha-medium"
                radius="l"
                padding="l"
                gap="m"
                style={{
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                  transition: "all 0.3s ease",
                  border: "2px solid var(--neutral-alpha-weak)",
                  position: "relative",
                  overflow: "hidden",
                  width: "350px",
                  flexShrink: 0,
                }}
              >
                {/* Decorative Top Border */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background:
                      "linear-gradient(90deg, var(--brand-alpha-strong), var(--brand-alpha-medium))",
                    borderRadius: "var(--radius-l) var(--radius-l) 0 0",
                  }}
                />

                {/* Section Header */}
                <Column gap="m" horizontal="center" align="center" paddingTop="m">
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, var(--brand-alpha-strong), var(--brand-alpha-medium))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--brand-on-background-strong)",
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                    }}
                  >
                    {index + 1}
                  </div>
                  <Heading variant="heading-strong-m" align="center">
                    {section.title}
                  </Heading>
                </Column>

                {/* Section Description */}
                <Text
                  onBackground="neutral-weak"
                  variant="body-default-m"
                  align="left"
                  paddingX="m"
                  style={{ lineHeight: "1.6" }}
                >
                  {section.description}
                </Text>

                {/* Features List */}
                {section.points && (
                  <Column gap="m" flex={1}>
                    <Text
                      variant="heading-default-s"
                      onBackground="neutral-strong"
                      align="left"
                    >
                      Key Features:
                    </Text>
                    <Column gap="s" paddingX="m">
                      {section.points.map((point, pointIndex) => (
                        <Row key={pointIndex} gap="s" vertical="center">
                          <div
                            style={{
                              color: "var(--brand-on-background-strong)",
                              fontSize: "1.1rem",
                              minWidth: "22px",
                              height: "22px",
                              borderRadius: "50%",
                              background: "var(--brand-alpha-weak)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            ✓
                          </div>
                          <Text
                            variant="body-default-m"
                            style={{
                              lineHeight: "1.5",
                              wordBreak: "keep-all",
                              overflowWrap: "break-word",
                              whiteSpace: "normal",
                            }}
                          >
                            {point}
                          </Text>
                        </Row>
                      ))}
                    </Column>
                  </Column>
                )}

              </Column>
            </RevealFx>
          ))}
        </Row>

        {/* Second Row - 4th Card Centered */}
        {domain.sections.length > 3 && (
          <Row horizontal="center" paddingTop="l">
            <RevealFx translateY="16" delay={0.4}>
              <Column
                className="domain-card"
                background="surface"
                border="neutral-alpha-medium"
                radius="l"
                padding="l"
                gap="m"
                style={{
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                  transition: "all 0.3s ease",
                  border: "2px solid var(--neutral-alpha-weak)",
                  position: "relative",
                  overflow: "hidden",
                  width: "350px",
                  flexShrink: 0,
                }}
              >
                {/* Decorative Top Border */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background:
                      "linear-gradient(90deg, var(--brand-alpha-strong), var(--brand-alpha-medium))",
                    borderRadius: "var(--radius-l) var(--radius-l) 0 0",
                  }}
                />

                {/* Section Header */}
                <Column gap="m" horizontal="center" align="center" paddingTop="m">
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, var(--brand-alpha-strong), var(--brand-alpha-medium))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--brand-on-background-strong)",
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                    }}
                  >
                    4
                  </div>
                  <Heading variant="heading-strong-m" align="center">
                    {domain.sections[3].title}
                  </Heading>
                </Column>

                {/* Section Description */}
                <Text
                  onBackground="neutral-weak"
                  variant="body-default-m"
                  align="left"
                  paddingX="m"
                  style={{ lineHeight: "1.6" }}
                >
                  {domain.sections[3].description}
                </Text>

                {/* Features List */}
                {domain.sections[3].points && (
                  <Column gap="m" flex={1}>
                    <Text
                      variant="heading-default-s"
                      onBackground="neutral-strong"
                      align="left"
                    >
                      Key Features:
                    </Text>
                    <Column gap="s" paddingX="m">
                      {domain.sections[3].points.map((point, pointIndex) => (
                        <Row key={pointIndex} gap="s" vertical="center">
                          <div
                            style={{
                              color: "var(--brand-on-background-strong)",
                              fontSize: "1.1rem",
                              minWidth: "22px",
                              height: "22px",
                              borderRadius: "50%",
                              background: "var(--brand-alpha-weak)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            ✓
                          </div>
                          <Text
                            variant="body-default-m"
                            style={{
                              lineHeight: "1.5",
                              wordBreak: "keep-all",
                              overflowWrap: "break-word",
                              whiteSpace: "normal",
                            }}
                          >
                            {point}
                          </Text>
                        </Row>
                      ))}
                    </Column>
                  </Column>
                )}

              </Column>
            </RevealFx>
          </Row>
        )}
      </Column>

      {/* Call to Action Section */}
      {domain.cta && (
        <RevealFx translateY="16" delay={0.6}>
          <Row fillWidth gap="xl" s={{ direction: "column" }}>
            {/* Domain CTA Card */}
            <Column
              background="surface"
              border="neutral-alpha-medium"
              radius="l"
              padding="xl"
              gap="l"
              horizontal="center"
              align="center"
              flex={1}
              style={{
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
                border: '2px solid var(--neutral-alpha-weak)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Decorative Top Border */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, var(--brand-alpha-strong), var(--brand-alpha-medium))',
                borderRadius: 'var(--radius-l) var(--radius-l) 0 0'
              }} />
              
              <Heading variant="heading-strong-l" align="center">
                {domain.cta.title}
              </Heading>
              <Row gap="m" s={{ direction: "column" }}>
                <Button
                  href={domain.cta.href}
                  variant="primary"
                  size="l"
                  weight="default"
                  arrowIcon
                >
                  {domain.cta.text}
                </Button>
                <Button
                  href="/services"
                  variant="secondary"
                  size="l"
                  weight="default"
                  arrowIcon
                >
                  View All Services
                </Button>
              </Row>
            </Column>

            {/* Newsletter Card */}
            <Column
              background="surface"
              border="neutral-alpha-medium"
              radius="l"
              padding="xl"
              gap="l"
              horizontal="center"
              align="center"
              flex={1}
              style={{
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
                border: '2px solid var(--neutral-alpha-weak)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Decorative Top Border */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, var(--brand-alpha-strong), var(--brand-alpha-medium))',
                borderRadius: 'var(--radius-l) var(--radius-l) 0 0'
              }} />

              <Heading variant="heading-strong-l" align="center">
                Stay Updated
              </Heading>
              <Text
                onBackground="neutral-weak"
                variant="body-default-l"
                align="center"
              >
                Subscribe to our newsletter for the latest domain and hosting insights.
              </Text>
              
              {/* Newsletter Form */}
              <Column gap="m" fillWidth>
                <Row gap="s" s={{ direction: "column" }}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    style={{
                      padding: "0.75rem",
                      border: "1px solid var(--neutral-alpha-weak)",
                      borderRadius: "var(--radius-m)",
                      background: "var(--surface-background)",
                      color: "var(--neutral-on-background-strong)",
                      fontSize: "var(--body-default-m)",
                      flex: 1,
                      minWidth: "200px",
                    }}
                  />
                  <Button
                    variant="primary"
                    size="m"
                    weight="default"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Subscribe
                  </Button>
                </Row>
                <Text
                  variant="body-default-s"
                  onBackground="neutral-weak"
                  align="center"
                >
                  Get insights on domain management, DNS configuration, and hosting best practices.
                </Text>
              </Column>
            </Column>
          </Row>
        </RevealFx>
      )}
    </Column>
  );
}
