import { baseURL, services } from "@/resources";
import {
    Badge,
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
    title: services.title,
    description: services.description,
    baseURL: baseURL,
    path: services.path,
    image: services.image,
  });
}

export default function Services() {
  return (
    <Column maxWidth="xl" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={services.path}
        title={services.title}
        description={services.description}
        image={`/api/og/generate?title=${encodeURIComponent(services.title)}`}
      />

      {/* Header Section */}
      <Column fillWidth horizontal="center" gap="l" paddingBottom="xl">
        <Row horizontal="center" gap="m" vertical="center">
          <Column gap="s" horizontal="center">
            <Heading wrap="balance" variant="display-strong-l" align="center">
              {services.headline}
            </Heading>
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="heading-default-xl"
              align="center"
            >
              {services.subline}
            </Text>
          </Column>
        </Row>
      </Column>

      {/* Services Grid */}
      <Column fillWidth gap="xl" horizontal="center">
        {/* First Row - 3 Cards */}
        <Row gap="l" horizontal="center" className="services-grid">
          {services.serviceList.slice(0, 3).map((service, index) => (
            <RevealFx key={index} translateY="16" delay={index * 0.1}>
              <Column
                className="service-card"
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
                  maxWidth: "100%",
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

                {/* Service Header */}
                <Column gap="m" horizontal="center" align="center" paddingTop="m">
                  <Badge
                    background="brand-alpha-weak"
                    paddingX="12"
                    paddingY="4"
                    onBackground="neutral-strong"
                    textVariant="label-default-s"
                    arrow={false}
                  >
                    {service.category}
                  </Badge>
                  <Heading variant="heading-strong-m" align="center">
                    {service.title}
                  </Heading>
                </Column>

                {/* Service Description */}
                <Text
                  onBackground="neutral-weak"
                  variant="body-default-m"
                  align="left"
                  paddingX="m"
                  style={{ lineHeight: "1.6" }}
                >
                  {service.description}
                </Text>

                {/* Features List */}
                {service.features && (
                  <Column gap="m" flex={1}>
                    <Text
                      variant="heading-default-s"
                      onBackground="neutral-strong"
                      align="left"
                    >
                      What's Included:
                    </Text>
                    <Column gap="s" paddingX="m">
                      {service.features.map((feature, featureIndex) => (
                        <Row key={featureIndex} gap="s" vertical="center">
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
                            {feature}
                          </Text>
                        </Row>
                      ))}
                    </Column>
                  </Column>
                )}

                {/* Call to Action */}
                {service.cta && (
                  <Column horizontal="center" paddingTop="m">
                    <Button
                      href={service.cta.href}
                      variant="primary"
                      size="m"
                      weight="default"
                      arrowIcon
                    >
                      {service.cta.text}
                    </Button>
                  </Column>
                )}
              </Column>
            </RevealFx>
          ))}
        </Row>

        {/* Second Row - 4th Card Centered */}
        {services.serviceList.length > 3 && (
          <Row horizontal="center" paddingTop="l">
            <RevealFx translateY="16" delay={0.4}>
              <Column
                className="service-card"
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
                  maxWidth: "100%",
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

                {/* Service Header */}
                <Column gap="m" horizontal="center" align="center" paddingTop="m">
                  <Badge
                    background="brand-alpha-weak"
                    paddingX="12"
                    paddingY="4"
                    onBackground="neutral-strong"
                    textVariant="label-default-s"
                    arrow={false}
                  >
                    {services.serviceList[3].category}
                  </Badge>
                  <Heading variant="heading-strong-m" align="center">
                    {services.serviceList[3].title}
                  </Heading>
                </Column>

                {/* Service Description */}
                <Text
                  onBackground="neutral-weak"
                  variant="body-default-m"
                  align="left"
                  paddingX="m"
                  style={{ lineHeight: "1.6" }}
                >
                  {services.serviceList[3].description}
                </Text>

                {/* Features List */}
                {services.serviceList[3].features && (
                  <Column gap="m" flex={1}>
                    <Text
                      variant="heading-default-s"
                      onBackground="neutral-strong"
                      align="left"
                    >
                      What's Included:
                    </Text>
                    <Column gap="s" paddingX="m">
                      {services.serviceList[3].features.map((feature, featureIndex) => (
                        <Row key={featureIndex} gap="s" vertical="center">
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
                            {feature}
                          </Text>
                        </Row>
                      ))}
                    </Column>
                  </Column>
                )}

                {/* Call to Action */}
                {services.serviceList[3].cta && (
                  <Column horizontal="center" paddingTop="m">
                    <Button
                      href={services.serviceList[3].cta.href}
                      variant="primary"
                      size="m"
                      weight="default"
                      arrowIcon
                    >
                      {services.serviceList[3].cta.text}
                    </Button>
                  </Column>
                )}
              </Column>
            </RevealFx>
          </Row>
        )}
      </Column>

      {/* Bottom CTA Section */}
      <RevealFx translateY="16" delay={0.6}>
        <Row fillWidth gap="xl" className="cta-cards-container">
          {/* Ready to Get Started Card */}
          <Column
            className="cta-card"
            background="surface"
            border="neutral-alpha-medium"
            radius="l"
            padding="xl"
            gap="l"
            horizontal="center"
            align="center"
            flex={1}
            style={{
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
              transition: "all 0.3s ease",
              border: "2px solid var(--neutral-alpha-weak)",
              position: "relative",
              overflow: "hidden",
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

            <Heading variant="heading-strong-l" align="center">
              Ready to get started?
            </Heading>
            <Text
              onBackground="neutral-weak"
              variant="body-default-l"
              align="center"
            >
              Contact our team to discuss your hosting needs and get a personalized
              solution.
            </Text>
            <Row gap="m" className="cta-buttons">
              <Button
                href="/contact"
                variant="primary"
                size="l"
                weight="default"
                arrowIcon
              >
                Get Started
              </Button>
              <Button
                href="/domain"
                variant="secondary"
                size="l"
                weight="default"
                arrowIcon
              >
                Explore Domains
              </Button>
            </Row>
          </Column>

          {/* Newsletter Card */}
          <Column
            className="cta-card"
            background="surface"
            border="neutral-alpha-medium"
            radius="l"
            padding="xl"
            gap="l"
            horizontal="center"
            align="center"
            flex={1}
            style={{
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
              transition: "all 0.3s ease",
              border: "2px solid var(--neutral-alpha-weak)",
              position: "relative",
              overflow: "hidden",
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

            <Heading variant="heading-strong-l" align="center">
              Stay Updated
            </Heading>
            <Text
              onBackground="neutral-weak"
              variant="body-default-l"
              align="center"
            >
              Subscribe to our newsletter for the latest cloud hosting insights and updates.
            </Text>
            
            {/* Newsletter Form */}
            <Column gap="m" fillWidth>
              <Row gap="s" className="newsletter-form">
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
                style={{ 
                  paddingTop: "0.75rem",
                  paddingBottom: "0.5rem",
                  lineHeight: "1.4",
                  marginBottom: "0.5rem"
                }}
              >
                Get insights on cloud hosting, VPS management, and infrastructure best practices.
              </Text>
            </Column>
          </Column>
        </Row>
      </RevealFx>
    </Column>
  );
}
