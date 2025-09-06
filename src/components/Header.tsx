"use client";

import { Fade, Flex, Line, Row, ToggleButton } from "@once-ui-system/core";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { about, contact, display, domain, person, routes, services } from "@/resources";
import styles from "./Header.module.scss";
import { ThemeToggle } from "./ThemeToggle";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string; // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
  const pathname = usePathname() ?? "";
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is logged in based on pathname or cookie
  useEffect(() => {
    // Check if user is on dashboard or has auth token cookie
    const isOnDashboard = pathname === "/dashboard";
    const hasAuthToken = typeof document !== 'undefined' && 
      document.cookie.split(';').some(cookie => cookie.trim().startsWith('authToken='));
    
    setIsLoggedIn(isOnDashboard || hasAuthToken);
  }, [pathname]);

  // Handle logout
  const handleLogout = () => {
    if (typeof document !== 'undefined') {
      // Clear the auth token cookie
      document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      setIsLoggedIn(false);
      // Redirect to home page
      window.location.href = '/';
    }
  };

  return (
    <>
      <Fade s={{ hide: true }} fillWidth position="fixed" height="80" zIndex={9} />
      <Fade
        hide
        s={{ hide: false }}
        fillWidth
        position="fixed"
        bottom="0"
        to="top"
        height="80"
        zIndex={9}
      />
      <Row
        fitHeight
        className={styles.position}
        position="sticky"
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
        s={{
          position: "fixed",
          padding: "s",
        }}
      >
        <Row paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
          {display.location && <Row s={{ hide: true }}>{person.location}</Row>}
        </Row>
        <Row fillWidth horizontal="center" s={{ paddingX: "s" }}>
          <Row
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
            s={{ padding: "s" }}
          >
            <Row gap="4" vertical="center" textVariant="body-default-s" suppressHydrationWarning s={{ gap: "s" }}>
              {routes["/"] && (
                <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} />
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              {routes["/about"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="person"
                      href="/about"
                      label={about.label}
                      selected={pathname === "/about"}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="person"
                      href="/about"
                      selected={pathname === "/about"}
                    />
                  </Row>
                </>
              )}
              {routes["/services"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="server"
                      href="/services"
                      label={services.label}
                      selected={pathname === "/services"}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="server"
                      href="/services"
                      selected={pathname === "/services"}
                    />
                  </Row>
                </>
              )}
              {routes["/domain"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="grid"
                      href="/domain"
                      label={domain.label}
                      selected={pathname === "/domain"}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="grid"
                      href="/domain"
                      selected={pathname === "/domain"}
                    />
                  </Row>
                </>
              )}
              {routes["/contact"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="email"
                      href="/contact"
                      label={contact.label}
                      selected={pathname === "/contact"}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="email"
                      href="/contact"
                      selected={pathname === "/contact"}
                    />
                  </Row>
                </>
              )}
              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" />
                  <ThemeToggle />
                </>
              )}
              
              {/* Accounts Section - Dashboard or Auth button */}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              {isLoggedIn ? (
                <ToggleButton
                  prefixIcon="user"
                  href="/dashboard"
                  selected={pathname === "/dashboard"}
                  onClick={pathname === "/dashboard" ? handleLogout : undefined}
                />
              ) : (
                <ToggleButton
                  prefixIcon="user"
                  href="/login"
                  selected={pathname === "/login"}
                />
              )}
            </Row>
          </Row>
        </Row>
        
        {/* Desktop Auth Buttons */}
        <Flex fillWidth horizontal="end" vertical="center" s={{ hide: true }}>
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
            {isLoggedIn ? (
              <ToggleButton
                prefixIcon="user"
                href="/dashboard"
                label="Account"
                selected={pathname === "/dashboard"}
                variant="outline"
                size="s"
                onClick={pathname === "/dashboard" ? handleLogout : undefined}
              />
            ) : (null)}
            <Line background="neutral-alpha-medium" vert maxHeight="24" />
            <Flex s={{ hide: true }}>
              {display.time && <TimeDisplay timeZone={person.location} />}
            </Flex>
          </Flex>
        </Flex>
      </Row>

    </>
  );
};
