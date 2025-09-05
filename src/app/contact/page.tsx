"use client";

import { baseURL, contact } from "@/resources";
import {
  Button,
  Column,
  Heading,
  RevealFx,
  Row,
  Schema,
  Text
} from "@once-ui-system/core";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    serviceType: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Form submitted with data:', formData);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '3d16e74e-af32-43c0-841c-81d433d467cc',
          ...formData,
          botcheck: false
        }),
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      if (response.ok) {
        console.log('Form submitted successfully!');
        setShowSuccess(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          serviceType: '',
          message: ''
        });
        // Hide success message after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        console.error('Form submission failed:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Column maxWidth="xl" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={contact.path}
        title={contact.title}
        description={contact.description}
        image={`/api/og/generate?title=${encodeURIComponent(contact.title)}`}
      />
      
      {/* Header Section */}
      <Column fillWidth horizontal="center" gap="l" paddingBottom="xl">
        <Row horizontal="center" gap="m" vertical="center">
          <Column gap="s" horizontal="center">
            <Heading wrap="balance" variant="display-strong-l">
              {contact.headline}
            </Heading>
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl" align="center">
              {contact.subline}
            </Text>
          </Column>
        </Row>
      </Column>

      {/* Success Notification */}
      {showSuccess && (
        <RevealFx translateY="16">
          <Column
            background="brand-alpha-weak"
            border="brand-alpha-medium"
            radius="l"
            padding="l"
            gap="m"
            horizontal="center"
            align="center"
            style={{
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              border: '2px solid var(--brand-alpha-medium)',
            }}
          >
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'var(--brand-alpha-medium)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--brand-on-background-strong)',
              fontSize: '1.5rem',
            }}>
              ✓
            </div>
            <Heading variant="heading-strong-m" align="center" onBackground="brand-strong">
              Message Sent Successfully!
            </Heading>
            <Text onBackground="brand-strong" variant="body-default-m" align="center">
              Thank you for contacting us. We'll get back to you within 24 hours.
            </Text>
          </Column>
        </RevealFx>
      )}

      {/* Contact Methods Grid */}
      <Row fillWidth gap="l" s={{ direction: "column" }}>
        {contact.contactMethods.map((method, index) => (
          <RevealFx key={index} translateY="16" delay={index * 0.1}>
            <Column
              flex={1}
              background="surface"
              border="neutral-alpha-medium"
              radius="l"
              padding="xl"
              gap="l"
              minHeight="250"
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
              
              {/* Method Header */}
              <Column gap="m" horizontal="center" align="center" paddingTop="m">
                <Heading variant="heading-strong-m" align="center">
                  {method.title}
                </Heading>
                <Text onBackground="neutral-weak" variant="body-default-l" align="center">
                  {method.description}
                </Text>
              </Column>

              {/* Details List */}
              {method.details && (
                <Column gap="s" flex={1}>
                  {method.details.map((detail, detailIndex) => (
                    <Row key={detailIndex} gap="s" vertical="center" horizontal="center" paddingX="m">
                      <Text variant="body-default-m" align="center">{detail}</Text>
                    </Row>
                  ))}
                </Column>
              )}

              {/* Call to Action */}
              {method.cta && (
                <Row horizontal="center" paddingTop="m">
                  <Button
                    href={method.cta.href}
                    variant="secondary"
                    size="m"
                    weight="default"
                    arrowIcon
                  >
                    {method.cta.text}
                  </Button>
                </Row>
              )}
            </Column>
          </RevealFx>
        ))}
      </Row>

      {/* Contact Form Section */}
      {contact.form && (
        <RevealFx translateY="16" delay={0.6}>
          <Column
            background="surface"
            border="neutral-alpha-medium"
            radius="l"
            padding="xl"
            gap="l"
            fillWidth
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
            
            {/* Form Header */}
            <Column gap="m" horizontal="center" align="center" paddingTop="m">
              <Heading variant="heading-strong-l" align="center">
                {contact.form.title}
              </Heading>
              <Text onBackground="neutral-weak" variant="body-default-l" align="center">
                {contact.form.description}
              </Text>
            </Column>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <Column gap="l">
                {/* Name Fields */}
                <Row gap="l" s={{ direction: "column" }}>
                  <Column flex={1} gap="s">
                    <Text variant="label-default-s">First Name *</Text>
                    <input
                      type="text"
                      name="firstName"
                      id="contact-firstname"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter your first name"
                      style={{
                        padding: '0.75rem',
                        border: '1px solid var(--neutral-alpha-weak)',
                        borderRadius: 'var(--radius-m)',
                        background: 'var(--surface-background)',
                        color: 'var(--neutral-on-background-strong)',
                        fontSize: 'var(--body-default-m)',
                        width: '100%',
                        transition: 'all 0.3s ease',
                      }}
                    />
                  </Column>
                  <Column flex={1} gap="s">
                    <Text variant="label-default-s">Last Name *</Text>
                    <input
                      type="text"
                      name="lastName"
                      id="contact-lastname"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter your last name"
                      style={{
                        padding: '0.75rem',
                        border: '1px solid var(--neutral-alpha-weak)',
                        borderRadius: 'var(--radius-m)',
                        background: 'var(--surface-background)',
                        color: 'var(--neutral-on-background-strong)',
                        fontSize: 'var(--body-default-m)',
                        width: '100%',
                        transition: 'all 0.3s ease',
                      }}
                    />
                  </Column>
                </Row>

                {/* Email Field */}
                <Column gap="s">
                  <Text variant="label-default-s">Email Address *</Text>
                  <input
                    type="email"
                    name="email"
                    id="contact-email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    style={{
                      padding: '0.75rem',
                      border: '1px solid var(--neutral-alpha-weak)',
                      borderRadius: 'var(--radius-m)',
                      background: 'var(--surface-background)',
                      color: 'var(--neutral-on-background-strong)',
                      fontSize: 'var(--body-default-m)',
                      width: '100%',
                      transition: 'all 0.3s ease',
                    }}
                  />
                </Column>

                {/* Subject Field */}
                <Column gap="s">
                  <Text variant="label-default-s">Subject *</Text>
                  <input
                    type="text"
                    name="subject"
                    id="contact-subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What is this regarding?"
                    style={{
                      padding: '0.75rem',
                      border: '1px solid var(--neutral-alpha-weak)',
                      borderRadius: 'var(--radius-m)',
                      background: 'var(--surface-background)',
                      color: 'var(--neutral-on-background-strong)',
                      fontSize: 'var(--body-default-m)',
                      width: '100%',
                      transition: 'all 0.3s ease',
                    }}
                  />
                </Column>

                {/* Service Type */}
                <Column gap="s">
                  <Text variant="label-default-s">Service Type</Text>
                  <select
                    name="serviceType"
                    id="contact-service"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    aria-label="Select service type"
                    style={{
                      padding: '0.75rem',
                      border: '1px solid var(--neutral-alpha-weak)',
                      borderRadius: 'var(--radius-m)',
                      background: 'var(--surface-background)',
                      color: 'var(--neutral-on-background-strong)',
                      fontSize: 'var(--body-default-m)',
                      width: '100%',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <option value="">Select a service type</option>
                    <option value="vps-hosting">VPS Hosting</option>
                    <option value="cloud-servers">Cloud Servers</option>
                    <option value="domain-services">Domain Services</option>
                    <option value="managed-hosting">Managed Hosting</option>
                    <option value="general-inquiry">General Inquiry</option>
                  </select>
                </Column>

                {/* Message Field */}
                <Column gap="s">
                  <Text variant="label-default-s">Message *</Text>
                  <textarea
                    name="message"
                    id="contact-message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your hosting needs and requirements..."
                    style={{
                      padding: '0.75rem',
                      border: '1px solid var(--neutral-alpha-weak)',
                      borderRadius: 'var(--radius-m)',
                      background: 'var(--surface-background)',
                      color: 'var(--neutral-on-background-strong)',
                      fontSize: 'var(--body-default-m)',
                      width: '100%',
                      transition: 'all 0.3s ease',
                      fontFamily: 'inherit',
                    }}
                  />
                </Column>

                {/* Submit Button */}
                <Row horizontal="center" paddingTop="m">
                  <Button
                    type="submit"
                    variant="primary"
                    size="l"
                    weight="default"
                    arrowIcon
                    disabled={isSubmitting}
                    style={{
                      minWidth: '200px',
                      padding: '1rem 2rem',
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </Row>
              </Column>
            </form>
          </Column>
        </RevealFx>
      )}
    </Column>
  );
}
