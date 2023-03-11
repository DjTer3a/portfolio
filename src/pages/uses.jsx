import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Mostafa Higazy</title>
        <meta
          name="description"
          content="Software I use, and recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, and recommend."
        intro="Below is a list of some of my most used and favourite software."
      >
        <div className="space-y-20">
          <ToolsSection title="Development tools">
            <Tool title="Visual Studio Code (VS Code)">
            VS Code is a popular and powerful code editor developed by Microsoft. Some of its best features include:
              IntelliSense, 
              Debugging,
              Git integration,  
              and Extensions.
            </Tool>
            <Tool title="Windows Subsystem for Linux (WSL)">
            WSL is a feature in Microsoft Windows that allows users to run native Linux command-line tools and applications on their Windows operating system. Some of its best features include:
            Compatibility,
            Performance,
            and Integration.
            </Tool>
            <Tool title="TablePlus">
            TablePlus is a database management tool that allows users to connect to and manage various database servers. Some of its best features include:
            Multi-database support,
            SQL editor,
            and Table data editor.
            </Tool>
            <Tool title="Polypane">
            Polypane is a web browser that allows users to view and test their websites across multiple devices and resolutions simultaneously. Some of its best features include:
            Responsive design testing, Advanced debugging support, and Advanced dev tools.
            </Tool>
            <Tool title="Insomnia">
            Insomnia is a popular API testing and development tool. Some of its best features include:
            API development,
            API testing,
            and API documentation.
            </Tool>
            <Tool title="Windows Terminal">
            Windows Terminal is a modern terminal emulator for Windows that allows users to access multiple command-line tools and shells from a single interface. Some of its best features include:
            Multiple shells,
Customization,
Integrations,
and Performance.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
            Figma is a collaborative design and prototyping tool that allows teams to create and design digital products. Some of its best features include:
            Collaboration,

Prototyping,

Design components,

Vector editing,

Cross-platform compatibility,

and Customizable workspace.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Slack">
            Slack is a popular team communication and collaboration platform. Some of its best features include:
            Real-time messaging,
Integrations,
and File sharing.
            </Tool>
            <Tool title="Linear">
            Linear is a project management and collaboration tool that helps teams track, prioritize, and complete tasks. Some of its best features include:
            Kanban boards,
Task dependencies,
Collaboration,
Custom fields,
Automation,
and Integrations.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
