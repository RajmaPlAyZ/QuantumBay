"use client";

import {
    Button,
    Column,
    Row,
    Text,
} from "@once-ui-system/core";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          email, 
          password,
          firstName,
          lastName,
          action: "signup"
        }),
      });

      if (response.ok) {
        setSuccess(true);
        // Redirect to login page after successful signup
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } else {
        const data = await response.json();
        setError(data.message || "Signup failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <Column gap="m" padding="l" background="brand-alpha-weak" radius="l" align="center">
        <Text variant="body-default-l" onBackground="brand-strong" align="center">
          Account created successfully! Please check your email to verify your account.
        </Text>
        <Text variant="body-default-s" onBackground="brand-strong" align="center">
          Redirecting to login page...
        </Text>
      </Column>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <Column gap="m">
        {error && (
          <Column gap="s" padding="m" background="danger-weak" radius="s">
            <Text variant="body-default-s" onBackground="danger-strong">
              {error}
            </Text>
          </Column>
        )}
        
        <Row gap="m">
          <Column flex={1} gap="s">
            <Text variant="label-default-s">First Name *</Text>
            <input
              type="text"
              name="firstName"
              id="signup-firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
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
            <Text variant="label-default-s">Last Name *</Text>
            <input
              type="text"
              name="lastName"
              id="signup-lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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
          <Text variant="label-default-s">Email Address *</Text>
          <input
            type="email"
            name="email"
            id="signup-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <Text variant="label-default-s">Password *</Text>
          <input
            type="password"
            name="password"
            id="signup-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password (min 6 characters)"
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
          <Text variant="label-default-s">Confirm Password *</Text>
          <input
            type="password"
            name="confirmPassword"
            id="signup-confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </Button>
        </Row>
      </Column>
    </form>
  );
}
