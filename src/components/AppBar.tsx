"use client";
import React from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import { useRouter } from "next/navigation";
import { User, LogOut, Settings } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
const AppBar = () => {
  const router = useRouter();
  const handleLogout = () => {};

  const handleProfile = () => {};

  const handleDashboard = () => {};

  const handleSettings = () => {};

  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      role="banner"
    >
      <div className="container mx-auto flex justify-center h-16 items-center">
        <div className="flex items-center flex-1 justify-between mr-5">
          <div>Test App</div>
        </div>

        <nav
          className="flex items-center flex-1 justify-center space-x-4"
          aria-label="Main navigation"
        >
          <Button
            aria-label="Go to dashboard"
            variant="link"
            onClick={handleDashboard}
            className="text-sm font-medium transition-colors mt-5 text-foreground"
          >
            Dashboard
          </Button>
        </nav>

        <div className="flex items-center flex-1 justify-end space-x-4">
          <ModeToggle aria-label="Toggle light and dark mode" />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-9 w-9 rounded-full"
                aria-label="Open user menu"
              >
                <Avatar className="h-9 w-9">
                  <AvatarImage src={""} alt={"User avatar"} />
                  <AvatarFallback className="text-sm">U</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleProfile}
                className="cursor-pointer"
                aria-label="Go to profile"
              >
                <User className="mr-2 h-4 w-4 text-accent-foreground" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={handleSettings}
                className="cursor-pointer"
                aria-label="Open settings"
              >
                <Settings className="mr-2 h-4 w-4 text-accent-foreground" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleLogout}
                className="cursor-pointer"
                aria-label="Log out"
              >
                <LogOut className="mr-2 h-4 w-4 text-accent-foreground" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
