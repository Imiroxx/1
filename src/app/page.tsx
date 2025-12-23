"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Hash,
  Volume2,
  Settings,
  Mic,
  Headphones,
  Plus,
  Search,
  Bell,
  Pin,
  Users,
  Inbox,
  HelpCircle,
  Smile,
  Gift,
  ImagePlus,
  Send,
  ChevronDown,
  UserPlus,
  MessageSquare,
  Store,
  Sparkles,
  Trophy,
  Mail,
  Check,
  X,
} from "lucide-react";
import { useState } from "react";

interface DirectMessage {
  id: number;
  user: string;
  avatar: string;
  lastMessage?: string;
  timestamp?: string;
  unread?: boolean;
  isGroup?: boolean;
  members?: string;
  online?: boolean;
}

interface Friend {
  id: number;
  name: string;
  status: "online" | "offline";
  avatar: string;
  activity?: string;
}

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<"online" | "all" | "pending" | "blocked">("online");
  const [selectedDM, setSelectedDM] = useState<number | null>(null);

  const directMessages: DirectMessage[] = [
    {
      id: 1,
      user: "nlkoss",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=nlkoss",
      online: true,
    },
    {
      id: 2,
      user: "sosiska_567, nlkoss",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sosiska",
      members: "3 участника",
      isGroup: true,
    },
    {
      id: 3,
      user: "nlkoss",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=nlkoss2",
      members: "2 участника",
    },
    {
      id: 4,
      user: "Группа mfroxx",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mfroxx",
      members: "1 участник",
      isGroup: true,
    },
    {
      id: 5,
      user: "OpenAI",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=openai",
      online: true,
    },
    {
      id: 6,
      user: "HEH1212",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=heh",
    },
    {
      id: 7,
      user: "sosiska_567",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sosiska2",
      members: "2 участника",
    },
    {
      id: 8,
      user: "DPLAY MTA",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=dplay",
      online: false,
    },
    {
      id: 9,
      user: "вупсень",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=vupsen",
    },
    {
      id: 10,
      user: "Discord",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=discord",
      lastMessage: "Официальное сообщение от Discord",
      unread: true,
    },
  ];

  const onlineFriends: Friend[] = [];

  return (
    <div className="flex h-screen overflow-hidden bg-[#313338]">
      {/* Server Sidebar (Home) */}
      <div className="flex w-[72px] flex-col items-center gap-2 bg-[#1e1f22] py-3">
        <div className="relative mb-2">
          <Button
            variant="ghost"
            className="group relative h-12 w-12 overflow-hidden rounded-[24px] bg-[#5865f2] p-0 transition-all hover:rounded-[16px] hover:bg-[#5865f2]"
          >
            <MessageSquare className="h-6 w-6 text-white" />
          </Button>
          <div className="absolute -left-1 top-1/2 h-10 w-1 -translate-y-1/2 rounded-r bg-white"></div>
        </div>
        <Separator className="mx-auto w-8 bg-[#35363c]" />

        {/* Servers list would go here */}
        <div className="flex flex-col gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <Button
              key={i}
              variant="ghost"
              className="group relative h-12 w-12 overflow-hidden rounded-[24px] bg-[#313338] p-0 text-xs transition-all hover:rounded-[16px] hover:bg-[#5865f2]"
            >
              <span className="font-semibold text-[#b5bac1] group-hover:text-white">S{i}</span>
            </Button>
          ))}
        </div>

        <Button
          variant="ghost"
          className="group mt-2 h-12 w-12 rounded-[24px] bg-[#313338] p-0 transition-all hover:rounded-[16px] hover:bg-[#23a559]"
        >
          <Plus className="h-6 w-6 text-[#23a559] transition-colors group-hover:text-white" />
        </Button>
      </div>

      {/* Navigation Sidebar */}
      <div className="flex w-60 flex-col bg-[#2b2d31]">
        <div className="p-2.5">
          <div className="mb-2 h-7 rounded bg-[#1e1f22] px-2">
            <Input
              placeholder="Найти или начать беседу"
              className="h-7 border-0 bg-transparent p-0 text-sm text-white placeholder:text-[#87898c] focus-visible:ring-0"
            />
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="px-2">
            {/* Navigation items */}
            <Button
              variant="ghost"
              className="mb-0.5 w-full justify-start gap-3 rounded bg-[#404249] px-2 py-1.5 text-white hover:bg-[#404249] hover:text-white"
            >
              <Users className="h-5 w-5 text-[#b5bac1]" />
              <span className="text-base font-medium">Друзья</span>
            </Button>

            <Button
              variant="ghost"
              className="mb-0.5 w-full justify-start gap-3 rounded px-2 py-1.5 text-[#949ba4] hover:bg-[#35373c] hover:text-[#dbdee1]"
            >
              <Inbox className="h-5 w-5 text-[#b5bac1]" />
              <span className="text-base">Запросы общения</span>
            </Button>

            <Button
              variant="ghost"
              className="mb-0.5 w-full justify-start gap-3 rounded px-2 py-1.5 text-[#949ba4] hover:bg-[#35373c] hover:text-[#dbdee1]"
            >
              <Sparkles className="h-5 w-5 text-[#b5bac1]" />
              <span className="text-base">Nitro</span>
            </Button>

            <Button
              variant="ghost"
              className="mb-0.5 w-full justify-start gap-3 rounded px-2 py-1.5 text-[#949ba4] hover:bg-[#35373c] hover:text-[#dbdee1]"
            >
              <Store className="h-5 w-5 text-[#b5bac1]" />
              <span className="text-base">Магазин</span>
            </Button>

            <Button
              variant="ghost"
              className="mb-0.5 w-full justify-start gap-3 rounded px-2 py-1.5 text-[#949ba4] hover:bg-[#35373c] hover:text-[#dbdee1]"
            >
              <Trophy className="h-5 w-5 text-[#b5bac1]" />
              <span className="text-base">Задания</span>
            </Button>

            {/* Direct Messages */}
            <div className="mb-2 mt-4 flex items-center justify-between px-2">
              <h3 className="text-xs font-semibold uppercase text-[#949ba4]">
                Личные сообщения
              </h3>
              <Plus className="h-4 w-4 cursor-pointer text-[#949ba4] hover:text-[#dbdee1]" />
            </div>

            {directMessages.map((dm) => (
              <Button
                key={dm.id}
                variant="ghost"
                className={`group mb-0.5 w-full justify-start gap-3 rounded px-2 py-1.5 text-[#949ba4] hover:bg-[#35373c] hover:text-[#dbdee1] ${
                  selectedDM === dm.id ? "bg-[#404249] text-white" : ""
                }`}
                onClick={() => setSelectedDM(dm.id)}
              >
                <div className="relative flex-shrink-0">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={dm.avatar} />
                    <AvatarFallback>{dm.user[0]}</AvatarFallback>
                  </Avatar>
                  {dm.online && (
                    <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#2b2d31] bg-[#23a559]" />
                  )}
                </div>
                <div className="flex-1 overflow-hidden text-left">
                  <div className="truncate text-base font-medium">
                    {dm.user}
                  </div>
                  {dm.members && (
                    <div className="truncate text-xs text-[#949ba4]">
                      {dm.members}
                    </div>
                  )}
                </div>
                {dm.unread && (
                  <div className="h-2 w-2 flex-shrink-0 rounded-full bg-white" />
                )}
              </Button>
            ))}
          </div>
        </ScrollArea>

        {/* User Panel */}
        <div className="flex items-center gap-2 bg-[#232428] p-2">
          <div className="relative">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=mfroxx" />
              <AvatarFallback>М</AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#232428] bg-[#f0b232]" />
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="truncate text-sm font-semibold text-white">
              mfroxx
            </div>
            <div className="truncate text-xs text-[#b5bac1]">Невидимый</div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-[#b5bac1] hover:bg-[#35373c] hover:text-[#dbdee1]"
          >
            <Mic className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-[#b5bac1] hover:bg-[#35373c] hover:text-[#dbdee1]"
          >
            <Headphones className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-[#b5bac1] hover:bg-[#35373c] hover:text-[#dbdee1]"
          >
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <div className="flex h-12 items-center justify-between border-b border-[#26272b] px-4 shadow-sm">
          <div className="flex items-center gap-4">
            <Users className="h-6 w-6 text-[#b5bac1]" />
            <span className="text-base font-semibold text-white">Друзья</span>
            <Separator orientation="vertical" className="h-6 bg-[#3f4147]" />
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                className={`h-7 rounded px-2 text-sm ${
                  selectedTab === "online"
                    ? "bg-[#404249] text-white"
                    : "text-[#b5bac1] hover:bg-[#404249] hover:text-[#dbdee1]"
                }`}
                onClick={() => setSelectedTab("online")}
              >
                В сети
              </Button>
              <Button
                variant="ghost"
                className={`h-7 rounded px-2 text-sm ${
                  selectedTab === "all"
                    ? "bg-[#404249] text-white"
                    : "text-[#b5bac1] hover:bg-[#404249] hover:text-[#dbdee1]"
                }`}
                onClick={() => setSelectedTab("all")}
              >
                Все
              </Button>
              <Button
                variant="ghost"
                className={`h-7 rounded px-2 text-sm ${
                  selectedTab === "pending"
                    ? "bg-[#404249] text-white"
                    : "text-[#b5bac1] hover:bg-[#404249] hover:text-[#dbdee1]"
                }`}
                onClick={() => setSelectedTab("pending")}
              >
                Ожидание
              </Button>
              <Button
                variant="ghost"
                className="h-7 rounded bg-[#248046] px-2 text-sm text-white hover:bg-[#1a6334]"
              >
                Добавить в друзья
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Bell className="h-5 w-5 cursor-pointer text-[#b5bac1] transition-colors hover:text-[#dbdee1]" />
            <Inbox className="h-5 w-5 cursor-pointer text-[#b5bac1] transition-colors hover:text-[#dbdee1]" />
            <HelpCircle className="h-5 w-5 cursor-pointer text-[#b5bac1] transition-colors hover:text-[#dbdee1]" />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <div className="mb-4">
              <svg
                width="421"
                height="218"
                viewBox="0 0 421 218"
                className="mx-auto"
              >
                <circle cx="184" cy="92" r="67" fill="#3e4146" />
                <text
                  x="184"
                  y="110"
                  textAnchor="middle"
                  fill="#87898c"
                  fontSize="48"
                  fontWeight="600"
                >
                  👥
                </text>
              </svg>
            </div>
            <p className="text-base text-[#b5bac1]">
              Сейчас никого из ваших друзей нет в сети. Зайдите позже!
            </p>
          </div>
        </div>
      </div>

      {/* Active Contacts Sidebar */}
      <div className="w-[360px] border-l border-[#26272b] bg-[#2b2d31]">
        <div className="p-4">
          <h2 className="mb-4 text-xl font-bold text-white">
            Активные контакты
          </h2>
          <div className="text-center">
            <div className="mb-2 text-base font-bold text-white">
              Пока что тут тихо...
            </div>
            <p className="text-sm leading-relaxed text-[#b5bac1]">
              Если ваш друг начнёт чем-то заниматься — например, запустит игру
              или войдёт в голосовой чат, — вы увидите это здесь!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
