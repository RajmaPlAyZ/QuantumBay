"use client";

import {
    Button,
    Column,
    Row,
    Text,
} from "@once-ui-system/core";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Redirect to dashboard on successful login
        router.push("/dashboard");
      } else {
        const data = await response.json();
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

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
        <Column gap="s">
          <Text variant="label-default-s">Email</Text>
          <input
            type="email"
            name="email"
            id="login-email"
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
          <Text variant="label-default-s">Password</Text>
          <input
            type="password"
            name="password"
            id="login-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
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
        <Row horizontal="end" s={{ horizontal: "center" }}>
          <Button
            type="submit"
            variant="primary"
            size="m"
            weight="default"
            arrowIcon
            fillWidth
            disabled={isLoading}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </Button>
        </Row>
      </Column>
    </form>
  );
}
