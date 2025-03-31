'use client'

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { footerLinks, supportEmail, supportPhone } from '@/lib/constant'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from '../ui/separator'
import Link from 'next/link'
 
const formSchema = z.object({
  email: z.string().email('Please enter a valid email address').trim(),
})

const Footer = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }


  return (
    <footer className='container-x-padding flex flex-col  justify-center gap-4 py-10 space-y-10'>
      <Separator />
      
      <Accordion type="single" collapsible className='md:hidden' defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger className='font-bold'>DROP US A LINE</AccordionTrigger>
          <AccordionContent>
            <div className='flex flex-col gap-4'>
              <div>
                <Link href={`tel:${supportPhone}`} className='hover:underline'>{supportPhone}</Link>
                <br />
                <Link href={`mailto:${supportEmail}`} className='hover:underline'>{supportEmail}</Link>
              </div>
              <p className='text-muted-foreground'>We are here to help you!</p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className='font-bold'>MAIN MENU</AccordionTrigger>
          <AccordionContent>
            <div className='flex flex-col gap-4'>
              {footerLinks.at(0)?.links.map((link, index) => (
                <div key={index} className='flex flex-col gap-2'>
                  <a key={index} href={link.path} className='text-muted-foreground text-sm hover:underline'>{link.name}</a>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className='font-bold'>SUPPORT</AccordionTrigger>
          <AccordionContent>
            <div className='flex flex-col gap-4'>
              {footerLinks.at(1)?.links.map((link, index) => (
                <div key={index} className='flex flex-col gap-2'>
                  <a key={index} href={link.path} className='text-muted-foreground text-sm hover:underline'>{link.name}</a>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className='font-bold'>THE INSIDE SCOOP</AccordionTrigger>
          <AccordionContent>
            <div className='flex flex-col gap-4'>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='hidden'>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email" {...field} />
                        </FormControl>
                        <FormDescription className='text-xs'>
                          This email will be used to send you updates and offers.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className='uppercase'>Subsribe</Button>
                </form>
              </Form>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className='hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
        <div className='flex flex-col gap-4'>
          <h3 className='font-bold'>DROP US A LINE</h3>
          <div className='flex flex-col gap-2'>
            <Link href={`tel:${supportPhone}`} className='hover:underline'>{supportPhone}</Link>
            <Link href={`mailto:${supportEmail}`} className='hover:underline'>{supportEmail}</Link>
          </div>
          <p className='text-muted-foreground'>We are here to help you!</p>
        </div>

        {footerLinks.map((item, index) => (
          <div key={index} className='flex flex-col gap-4'>
            <h3 className='font-bold uppercase'>{item.heading}</h3>
            <div className='flex flex-col gap-2'>
              {item.links.map((link, index) => (
                <a key={index} href={link.path} className='text-muted-foreground text-sm hover:underline'>{link.name}</a>
              ))}
            </div>
          </div>
        ))}

        <div className='flex flex-col gap-4'>
          <h3 className='font-bold'>THE INSIDE SCOOP</h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='hidden'>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email" {...field} />
                    </FormControl>
                    <FormDescription className='text-xs'>
                      This email will be used to send you updates and offers.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className='uppercase'>Subsribe</Button>
            </form>
          </Form>
        </div>
      </div>

      <section className='text-sm text-gray-600'>
        <p>All website content are © {new Date().getFullYear()} by TeamNextCraft.</p>
        <p>All rights reserved.</p>      
      </section>
    </footer>
  )
}

export default Footer