import { SectionContainer } from '../ui/section-container'
import { Badge } from '../ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { PlayCircle, Clock, Edit3, Users, Split, Merge, Tag, X } from 'lucide-react'

interface VideoGuideItem {
  id: string
  title: string
  description: string
  videoUrl: string
  status: 'completed' | 'in-progress'
  icon: React.ComponentType<any>
}

const videoGuides: VideoGuideItem[] = [
  {
    id: 'edit-segment',
    title: 'Edit Segment',
    description: 'Learn how to edit segments in your video content',
    videoUrl: 'https://drive.google.com/file/d/1qJG9Xz0oeZn_nREy-ivsz4w1qUJjD_Sn/view?usp=sharing',
    status: 'completed',
    icon: Edit3
  },
  {
    id: 'change-speaker-id',
    title: 'Change Speaker ID',
    description: 'How to modify and assign speaker identifications',
    videoUrl: '',
    status: 'in-progress',
    icon: Users
  },
  {
    id: 'split-utterance',
    title: 'Split Utterance',
    description: 'Break down utterances into smaller segments',
    videoUrl: '',
    status: 'in-progress',
    icon: Split
  },
  {
    id: 'merge-utterance',
    title: 'Merge Utterance',
    description: 'Combine multiple utterances into one segment',
    videoUrl: '',
    status: 'in-progress',
    icon: Merge
  },
  {
    id: 'add-annotation',
    title: 'Add Annotation',
    description: 'Add notes and annotations to your video content',
    videoUrl: '',
    status: 'in-progress',
    icon: Tag
  },
  {
    id: 'exclude',
    title: 'Exclude',
    description: 'How to exclude segments from your final output',
    videoUrl: '',
    status: 'in-progress',
    icon: X
  }
]

// Helper function to convert Google Drive share URL to embed URL
const convertToEmbedUrl = (shareUrl: string) => {
  if (!shareUrl) return ''
  const fileIdMatch = shareUrl.match(/\/d\/([a-zA-Z0-9-_]+)/)
  if (fileIdMatch) {
    return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`
  }
  return shareUrl
}

export default function GuidelineSection() {
  const mainVideoUrl = 'https://drive.google.com/file/d/1rxzFRnNu4D-rgauxTDpY9QcsOO6JQqH1/view?usp=sharing'

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative overflow-hidden bg-primary py-16">
        {/* Decorative elements */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -left-24 top-1/3 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
        </div>
        
        <div className="container max-w-8xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              <PlayCircle className="w-4 h-4 mr-2" />
              Video Guidelines
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              SATE AI Video Guidelines
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive video tutorials to help you master all features of SATE AI platform
            </p>
          </div>
        </div>
      </div>

      {/* Main Video */}
      <SectionContainer variant="default" className="py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Complete Video Guide</h2>
            <p className="text-muted-foreground text-lg">
              Watch the full tutorial to understand all SATE AI features
            </p>
          </div>
          
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl bg-muted">
            <iframe
              src={convertToEmbedUrl(mainVideoUrl)}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="SATE AI Complete Guide"
            />
          </div>
        </div>
      </SectionContainer>

      {/* Short Video Guides */}
      <SectionContainer variant="muted" className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Feature-Specific Guides</h2>
          <p className="text-muted-foreground text-lg">
            Quick tutorials for specific features and workflows
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoGuides.map((guide) => {
            const IconComponent = guide.icon
            return (
              <Card key={guide.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <Badge 
                        variant={guide.status === 'completed' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {guide.status === 'completed' ? (
                          <>
                            <PlayCircle className="w-3 h-3 mr-1" />
                            Available
                          </>
                        ) : (
                          <>
                            <Clock className="w-3 h-3 mr-1" />
                            In Progress
                          </>
                        )}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{guide.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {guide.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {guide.status === 'completed' && guide.videoUrl ? (
                    <div className="relative aspect-video rounded-md overflow-hidden bg-muted">
                      <iframe
                        src={convertToEmbedUrl(guide.videoUrl)}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={guide.title}
                      />
                    </div>
                  ) : (
                    <div className="relative aspect-video rounded-md overflow-hidden bg-muted flex items-center justify-center">
                      <div className="text-center">
                        <Clock className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Coming Soon</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </SectionContainer>

      {/* Call to Action */}
      <SectionContainer variant="accent" className="py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Need More Help?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            If you have questions about any of these features or need personalized assistance, 
            don't hesitate to reach out to our support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://demo.sate.agency/" 
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              <PlayCircle className="w-4 h-4 mr-2" />
              Watch Demo
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}
