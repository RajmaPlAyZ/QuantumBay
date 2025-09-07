import { about, baseURL, person, social } from "@/resources";
import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Meta,
  Row,
  Schema,
  Tag,
  Text,
} from "@once-ui-system/core";
import React, { Fragment } from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}
// Fix about section Overlap Issue

export default function About() {
  return (
    <Column maxWidth="xl" gap="l" paddingY="8" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Profile Section */}
      <Column fillWidth horizontal="center" gap="l" paddingBottom="l">
        {/* Avatar and Basic Info */}
        <Column horizontal="center" gap="m" align="center">
          {about.avatar.display && (
            <Avatar src={person.avatar} size="xl" />
          )}
          
          {/* Location and Languages */}
          <Column horizontal="center" gap="s" align="center">
            {person.location && (
              <Row gap="8" vertical="center" horizontal="center">
                <Icon onBackground="accent-weak" name="globe" />
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {person.location}
                </Text>
              </Row>
            )}
            
            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="8" horizontal="center">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>

          {/* Name and Role */}
          <Column horizontal="center" gap="xs" align="center">
            <Heading wrap="balance" variant="display-strong-l" align="center">
              {person.name}
            </Heading>
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl" align="center">
              {person.role}
            </Text>
          </Column>

          {/* Schedule Call Button */}
          {about.calendar.display && (
            <Row
              fitWidth
              border="brand-alpha-medium"
              background="brand-alpha-weak"
              radius="full"
              padding="4"
              gap="8"
              vertical="center"
              horizontal="center"
              style={{
                backdropFilter: "blur(var(--static-space-1))",
              }}
            >
              <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
              <Row paddingX="8">Schedule a call</Row>
              <IconButton
                href={about.calendar.link}
                data-border="rounded"
                variant="secondary"
                icon="chevronRight"
                size="s"
              />
            </Row>
          )}

          {/* Social Links */}
          {social.length > 0 && (
            <Row
              paddingTop="12"
              paddingBottom="4"
              gap="8"
              wrap
              horizontal="center"
              fitWidth
              data-border="rounded"
            >
              {social.map(
                (item) =>
                  item.link && (
                    <Fragment key={item.name}>
                      <Row s={{ hide: true }}>
                        <Button
                          key={item.name}
                          href={item.link}
                          prefixIcon={item.icon}
                          label={item.name}
                          size="s"
                          weight="default"
                          variant="secondary"
                        />
                      </Row>
                      <Row hide s={{ hide: false }}>
                        <Button
                          size="m"
                          key={`${item.name}-icon`}
                          href={item.link}
                          prefixIcon={item.icon}
                          variant="secondary"
                        />
                      </Row>
                    </Fragment>
                  ),
              )}
            </Row>
          )}
        </Column>
      </Column>

      {/* Introduction Section */}
      {about.intro.display && (
        <Column fillWidth gap="m" horizontal="center" paddingBottom="l">
          <Text variant="body-default-l" align="left" style={{ lineHeight: "1.5" }}>
            {about.intro.description}
          </Text>
        </Column>
      )}

      {/* Work Experience Section */}
      {about.work.display && (
        <Column fillWidth gap="m" horizontal="center" paddingBottom="l">
          <Heading as="h2" variant="display-strong-s" align="center">
            {about.work.title}
          </Heading>
          <Row fillWidth gap="m" wrap horizontal="center">
            {about.work.experiences.map((experience, index) => (
              <Column 
                key={`${experience.company}-${experience.role}-${index}`} 
                fillWidth
                background="surface"
                border="neutral-alpha-medium"
                radius="l"
                padding="m"
                gap="s"
                style={{
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                  transition: "all 0.3s ease",
                  border: "2px solid var(--neutral-alpha-weak)",
                  position: "relative",
                  overflow: "hidden",
                  maxWidth: "400px",
                  minWidth: "300px",
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

                <Column gap="m" paddingTop="m">
                  <Row fillWidth horizontal="between" vertical="end">
                    <Text variant="heading-strong-l">
                      {experience.company}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {experience.timeframe}
                    </Text>
                  </Row>
                  <Text variant="body-default-s" onBackground="brand-weak">
                    {experience.role}
                  </Text>
                  <Column as="ul" gap="16">
                    {experience.achievements.map(
                      (achievement: React.ReactNode, achievementIndex: number) => (
                        <Text
                          as="li"
                          variant="body-default-m"
                          key={`${experience.company}-${achievementIndex}`}
                        >
                          {achievement}
                        </Text>
                      ),
                    )}
                  </Column>
                </Column>
              </Column>
            ))}
          </Row>
        </Column>
      )}

      {/* Education Section */}
      {about.studies.display && (
        <Column fillWidth gap="m" horizontal="center" paddingBottom="l">
          <Heading as="h2" variant="display-strong-s" align="center">
            {about.studies.title}
          </Heading>
          <Row fillWidth gap="m" wrap horizontal="center">
            {about.studies.institutions.map((institution, index) => (
              <Column 
                key={`${institution.name}-${index}`} 
                fillWidth
                background="surface"
                border="neutral-alpha-medium"
                radius="l"
                padding="m"
                gap="s"
                style={{
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                  transition: "all 0.3s ease",
                  border: "2px solid var(--neutral-alpha-weak)",
                  position: "relative",
                  overflow: "hidden",
                  maxWidth: "400px",
                  minWidth: "300px",
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

                <Column gap="m" paddingTop="m">
                  <Text variant="heading-strong-l">
                    {institution.name}
                  </Text>
                  <Text variant="heading-default-xs" onBackground="neutral-weak">
                    {institution.description}
                  </Text>
                </Column>
              </Column>
            ))}
          </Row>
        </Column>
      )}

      {/* Technical Skills Section */}
      {about.technical.display && (
        <Column fillWidth gap="m" horizontal="center" paddingBottom="l">
          <Heading as="h2" variant="display-strong-s" align="center">
            {about.technical.title}
          </Heading>
          <Row fillWidth gap="m" wrap horizontal="center">
            {about.technical.skills.map((skill, index) => (
              <Column 
                key={`${skill.title}-${index}`} 
                fillWidth
                background="surface"
                border="neutral-alpha-medium"
                radius="l"
                padding="m"
                gap="s"
                style={{
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                  transition: "all 0.3s ease",
                  border: "2px solid var(--neutral-alpha-weak)",
                  position: "relative",
                  overflow: "hidden",
                  maxWidth: "400px",
                  minWidth: "300px",
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

                <Column gap="m" paddingTop="m">
                  <Text variant="heading-strong-l">
                    {skill.title}
                  </Text>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {skill.description}
                  </Text>
                  {skill.tags && skill.tags.length > 0 && (
                    <Row wrap gap="8" paddingTop="8">
                      {skill.tags.map((tag, tagIndex) => (
                        <Tag key={`${skill.title}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                          {tag.name}
                        </Tag>
                      ))}
                    </Row>
                  )}
                </Column>
              </Column>
            ))}
          </Row>
        </Column>
      )}

      {/* Call to Action Section */}
      <Row fillWidth gap="l" className="cta-cards-container">
          {/* Contact CTA Card */}
          <Column
            className="cta-card"
            background="surface"
            border="neutral-alpha-medium"
            radius="l"
            padding="l"
            gap="m"
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
              Let's Connect
            </Heading>
            <Text
              onBackground="neutral-weak"
              variant="body-default-l"
              align="center"
            >
              Interested in working together or have questions about my experience?
              I'd love to hear from you.
            </Text>
            <Row gap="m" className="cta-buttons">
              <Button
                href="/contact"
                variant="primary"
                size="l"
                weight="default"
                arrowIcon
              >
                Get In Touch
              </Button>
              <Button
                href="/services"
                variant="secondary"
                size="l"
                weight="default"
                arrowIcon
              >
                View Services
              </Button>
            </Row>
          </Column>

          {/* Newsletter Card */}
          <Column
            className="cta-card"
            background="surface"
            border="neutral-alpha-medium"
            radius="l"
            padding="l"
            gap="m"
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
              Subscribe to my newsletter for insights on technology, career development, and industry trends.
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
                Get insights on technology trends, career development, and industry best practices.
              </Text>
            </Column>
          </Column>
        </Row>
    </Column>
  );
}