"use client";
import { Bold } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Switch } from "@radix-ui/react-switch";
import { Toggle } from "@radix-ui/react-toggle";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import Image from "next/image";
import { SliderProps } from "@radix-ui/react-slider";
import { Label } from "@radix-ui/react-label";
import { Alert, AlertTitle } from "@/components/ui/alert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";

export default function Home({ className, ...props }: SliderProps) {
  const { toast } = useToast();
  return (
    <div className=" flex justify-center  items-center h-screen w-full gap-10x outline-black space-x-2">
      <Input
        type="하고싶은말"
        placeholder="하고싶은말"
        className="  w-32  "
      ></Input>
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className={cn("w-[60%]", className)}
        {...props}
      />
      <Alert className="w-full">집가고 시퍼요</Alert>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>집에 가고싶으세요?</AccordionTrigger>
          <AccordionContent>그딴건 없습니다 ㅋㅋ</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
