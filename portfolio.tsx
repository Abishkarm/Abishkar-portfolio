import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Briefcase, GraduationCap, Wrench, Phone, Mail, MapPin, FileText, Award } from 'lucide-react'

export default function AnimatedPortfolio() {
  const [activeTab, setActiveTab] = useState("about")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-8 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Card className="max-w-4xl mx-auto overflow-hidden">
        <CardHeader className="text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-teal-500 to-green-400 opacity-75"></div>
          <div className="relative z-10">
            <div className="flex justify-center mb-4">
              <Avatar className="w-40 h-40 border-4 border-white shadow-lg animate-bounce">
                <AvatarImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20230216-WA0004-removebg-preview-removebg-preview-a2rOEsBH4p4KYE7ojj01oS2cNaqcNH.png" alt="Abishkar Shrestha" />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
            </div>
            <CardTitle className="text-4xl font-bold text-white mb-2 animate-pulse">Abishkar Shrestha</CardTitle>
            <CardDescription className="text-xl text-white">Mechanical Engineer</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-5 gap-2 p-1 bg-gray-100 rounded-lg">
              {["about", "education", "experience", "skills", "contact"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className={`transition-all duration-300 ${activeTab === tab ? 'bg-white shadow-md' : 'hover:bg-gray-200'}`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="mt-6 transition-all duration-500 ease-in-out">
              <TabsContent value="about" className="space-y-4">
                <p className="text-lg leading-relaxed animate-fadeIn">
                  I am a mechanical engineer who loves to deal with real life problems. I've worked on
                  building automation sectors, designing and installing HVAC components in the
                  buildings. I have good communication skills, a can-do attitude and perseverance to
                  solve complex problems. I am constantly seeking opportunities to broaden my
                  knowledge and skills in the field of building automation.
                </p>
              </TabsContent>
              <TabsContent value="education" className="space-y-4">
                {[
                  { title: "Bachelor in Mechanical Engineering", institution: "Kathmandu University", years: "2018-2023" },
                  { title: "Higher Secondary School, Science", institution: "Kathmandu Institute of Science & Technology School", years: "2016-2018" }
                ].map((edu, index) => (
                  <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                    <GraduationCap className="mr-4 text-blue-500" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg">{edu.title}</h3>
                      <p className="text-gray-600">{edu.institution}</p>
                      <p className="text-sm text-gray-500">{edu.years}</p>
                    </div>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="experience" className="space-y-4">
                {[
                  { title: "Junior Building Automation System Operator", company: "Eco Zone Architect and Construction Pvt. Ltd." },
                  { title: "Internship on Production and Maintenance in Foods", company: "Chaudhary Group Industrial Park, Nawalparasi" }
                ].map((exp, index) => (
                  <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                    <Briefcase className="mr-4 text-green-500" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg">{exp.title}</h3>
                      <p className="text-gray-600">{exp.company}</p>
                    </div>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="skills" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="transition-transform duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-600">Technical Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      {["CAD/CAM - Creo, AutoCAD", "CFD - ANSYS", "MS Office - Word, Excel & PowerPoint", "Programming - C, C++, Python"].map((skill, index) => (
                        <li key={index} className="text-gray-700">{skill}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="transition-transform duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-600">Certifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {["AI for Everyone (Coursera)", "Licensed Engineer of Nepal", "Training and Workshop of Science and Robotics"].map((cert, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <Award className="mr-2 text-yellow-500" size={18} />
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="contact" className="space-y-4">
                {[
                  { icon: Mail, content: "abishkarshrestha64@gmail.com", href: "mailto:abishkarshrestha64@gmail.com" },
                  { icon: Phone, content: "+977 9869499614", href: "tel:+9779869499614" },
                  { icon: MapPin, content: "Kathmandu, Nepal", href: null }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                    <contact.icon className="mr-3 text-purple-500" size={24} />
                    {contact.href ? (
                      <a href={contact.href} className="text-blue-600 hover:underline">{contact.content}</a>
                    ) : (
                      <span>{contact.content}</span>
                    )}
                  </div>
                ))}
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>
      </Card>
      <div className="mt-8 text-center space-x-4">
        <Button className="bg-purple-600 hover:bg-purple-700 text-white transition-transform duration-300 hover:scale-110">
          <FileText className="mr-2" />
          Download CV
        </Button>
        <Button variant="outline" className="bg-white text-purple-600 border-purple-600 hover:bg-purple-100 transition-transform duration-300 hover:scale-110">
          <Mail className="mr-2" />
          Contact Me
        </Button>
      </div>
    </div>
  )
}