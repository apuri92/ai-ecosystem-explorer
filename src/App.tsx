import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import {
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams
} from 'react-router-dom';
import { ArrowLeft, BarChart3, Circle, ClipboardList, CreditCard, HeartPulse, Layers, MessageCircle, MessageSquare, PackageCheck, ShieldCheck, ShoppingBag, ShoppingCart, Sparkles, Truck, TrendingUp, Users, Watch, Zap } from 'lucide-react';
import { industries } from './data/industries';
import { useIdleReset } from './hooks/useIdleReset';
import type { Industry, JourneyStep } from './types';

const transitionProps = { type: 'spring', stiffness: 240, damping: 24 };

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const secondsLeft = useIdleReset(navigate, true);

  return (
    <div className="min-h-screen px-4 py-6 text-slate-100 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col gap-6 rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-soft backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">AI-Powered Ecosystem Explorer</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Interactive industry journeys for sales and events</h1>
          </div>
          <div className="grid gap-2 rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-xs text-slate-300 sm:text-right">
            <p>Touch-first, offline-ready, content-driven.</p>
            <p>Idle reset returns to landing after {secondsLeft}s of inactivity.</p>
            {location.pathname !== '/' ? (
              <button
                type="button"
                className="mt-2 inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/15"
                onClick={() => navigate('/')}
              >
                <ArrowLeft size={14} /> Back to industries
              </button>
            ) : null}
          </div>
        </header>

        <main>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.24 }}
            >
              <Routes location={location}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/industry/:industryId" element={<IndustryEntry />} />
                <Route path="/industry/:industryId/step/:stepNumber" element={<IndustryPage />} />
                <Route path="/industry/:industryId/portfolio" element={<PortfolioPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

function LandingPage() {
  return (
    <section className="space-y-8">
      <div className="rounded-4xl border border-white/10 bg-slate-950/80 p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.25em] text-sky-300/80">Start here</p>
        <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Choose an industry</h2>
        <p className="mt-4 max-w-2xl text-slate-300">Tap any industry to explore the end-to-end journey, see the key experiences, powered-by solutions, and the partner portfolio that makes it possible.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {industries.map((industry) => (
          <Link key={industry.id} to={`/industry/${industry.id}`} className="group rounded-4xl border border-white/10 bg-slate-950/80 p-8 shadow-soft transition hover:-translate-y-1 hover:border-white/20 hover:bg-slate-900/90">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">{industry.name}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{industry.tagline}</h3>
              </div>
              <div className="h-14 w-14 rounded-3xl" style={{ backgroundColor: industry.accentColor, opacity: 0.22 }} />
            </div>
            <p className="text-slate-300">{industry.description}</p>
            <div className="mt-8 grid gap-3">
              {industry.heroStats.map((stat) => (
                <div key={stat} className="rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-200">
                  {stat}
                </div>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function IndustryEntry() {
  const { industryId } = useParams();
  const industry = industries.find((item) => item.id === industryId);

  if (!industry) {
    return <NotFound />;
  }

  return <Navigate to={`/industry/${industry.id}/step/1`} replace />;
}

function IndustryPage() {
  const { industryId, stepNumber } = useParams();
  const navigate = useNavigate();
  const industry = industries.find((item) => item.id === industryId);
  const activeStep = industry?.journey.find((step) => step.stepNumber === Number(stepNumber));

  if (!industry) {
    return <NotFound />;
  }

  if (!activeStep) {
    return <Navigate to={`/industry/${industry.id}/step/1`} replace />;
  }

  return (
    <div className="space-y-10">
      <section className="grid gap-8 rounded-4xl border border-white/10 bg-slate-950/80 p-8 shadow-soft lg:grid-cols-[1fr_0.8fr]">
        <div className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{industry.name}</p>
              <h2 className="mt-3 text-4xl font-semibold text-white">{industry.tagline}</h2>
              <p className="mt-3 text-slate-300">{industry.description}</p>
            </div>
            <div className="rounded-3xl bg-white/5 px-4 py-3 text-sm font-semibold text-white" style={{ borderColor: industry.accentColor, borderWidth: 1 }}>
              {industry.heroStats.length} touchpoints
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {industry.heroStats.map((stat) => (
              <div key={stat} className="rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-200">
                {stat}
              </div>
            ))}
          </div>

          <nav className="overflow-x-auto pb-1">
            <div className="flex gap-3">
              {industry.journey.map((step) => (
                <button
                  key={step.stepNumber}
                  type="button"
                  onClick={() => navigate(`/industry/${industry.id}/step/${step.stepNumber}`)}
                  className={`min-w-[4rem] rounded-3xl border px-4 py-3 text-left transition ${step.stepNumber === activeStep.stepNumber ? 'border-white text-white shadow-soft' : 'border-white/10 text-slate-300 hover:border-white/20 hover:bg-white/5'}`}
                  style={
                    step.stepNumber === activeStep.stepNumber
                      ? { backgroundColor: `${industry.accentColor}13`, borderColor: industry.accentColor }
                      : undefined
                  }
                >
                  <span className="text-xs uppercase tracking-[0.35em] text-slate-400">Step</span>
                  <div className="mt-2 flex items-center gap-2 text-base font-semibold">
                    <Circle size={16} className={step.stepNumber === activeStep.stepNumber ? 'text-white' : 'text-slate-500'} />
                    <span>{step.stepNumber}</span>
                  </div>
                  <p className="mt-2 text-sm leading-snug text-slate-300">{step.title}</p>
                </button>
              ))}
            </div>
          </nav>

          <div className="rounded-4xl border border-white/10 bg-slate-900/80 p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Selected step</p>
                <h3 className="mt-2 text-3xl font-semibold text-white">{activeStep.title}</h3>
              </div>
              <div className="rounded-3xl bg-slate-950/80 px-4 py-3 text-sm text-slate-200" style={{ color: industry.accentColor, border: `1px solid ${industry.accentColor}` }}>
                Step {activeStep.stepNumber}
              </div>
            </div>
            <p className="text-slate-300">{activeStep.description}</p>
          </div>
        </div>

        <div className="space-y-6">
          <StepDetail industry={industry} step={activeStep} />

          <div className="rounded-4xl border border-white/10 bg-slate-900/80 p-6">
            <div className="mb-4 flex items-center gap-3 text-slate-400">
              <Zap size={18} />
              <h3 className="text-lg font-semibold text-white">Business outcomes</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {industry.businessOutcomes.map((outcome) => (
                <div key={outcome.title} className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">
                  <div className="mb-3 flex items-center gap-3 text-slate-300">
                    <Icon name={outcome.icon as keyof typeof ICON_MAP} className="text-slate-200" />
                    <h4 className="text-base font-semibold text-white">{outcome.title}</h4>
                  </div>
                  <p className="text-slate-300">{outcome.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-4xl border border-white/10 bg-slate-950/80 p-6 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Explore the partner portfolio</p>
            <p className="mt-3 text-lg font-semibold text-white">See the full ISV mapping for this industry.</p>
            <button
              type="button"
              onClick={() => navigate(`/industry/${industry.id}/portfolio`)}
              className="mt-6 inline-flex items-center justify-center rounded-3xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              style={{ color: industry.accentColor }}
            >
              View portfolio table
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function StepDetail({ industry, step }: { industry: Industry; step: JourneyStep }) {
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null);

  return (
    <div className="rounded-4xl border border-white/10 bg-slate-950/80 p-6">
      <div className="mb-5">
        <h3 className="text-xl font-semibold text-white">Key experiences</h3>
        <p className="mt-2 text-slate-300">Tappable experiences for the current journey stage.</p>
      </div>
      <div className="grid gap-3">
        {step.keyExperiences.map((experience) => (
          <div key={experience} className="rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-4 text-slate-200">
            {experience}
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-4xl border border-white/10 bg-slate-900/80 p-6">
        <div className="mb-5 flex items-center gap-3 text-slate-400">
          <ShieldCheck size={18} />
          <h3 className="text-xl font-semibold text-white">Powered by</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {step.poweredBySolutions.map((solution) => {
            const active = selectedSolution === solution;
            return (
              <button
                key={solution}
                type="button"
                onClick={() => setSelectedSolution(active ? null : solution)}
                className={`rounded-3xl border px-4 py-3 text-left text-sm transition ${active ? 'border-white bg-white/10 text-white' : 'border-white/10 text-slate-200 hover:border-white/20 hover:bg-white/5'}`}
                style={active ? { backgroundColor: `${industry.accentColor}17`, borderColor: industry.accentColor } : undefined}
              >
                {solution}
              </button>
            );
          })}
        </div>
        {selectedSolution ? (
          <div className="mt-5 rounded-3xl border border-white/10 bg-slate-950/80 p-4 text-slate-300">
            <p className="text-sm font-semibold text-white">{selectedSolution}</p>
            <p className="mt-2">{industry.solutionDescriptions[selectedSolution] ?? 'A partner-enabled solution to support this experience.'}</p>
          </div>
        ) : (
          <p className="mt-4 text-sm text-slate-400">Tap a solution to see a one-line description.</p>
        )}
      </div>
    </div>
  );
}

function PortfolioPage() {
  const { industryId } = useParams();
  const industry = industries.find((item) => item.id === industryId);
  const [filter, setFilter] = useState('All touchpoints');

  if (!industry) {
    return <NotFound />;
  }

  const touchpoints = ['All touchpoints', ...new Set(industry.portfolioTable.map((row) => row.touchpoint))];
  const rows = filter === 'All touchpoints' ? industry.portfolioTable : industry.portfolioTable.filter((row) => row.touchpoint === filter);

  return (
    <section className="space-y-8">
      <div className="rounded-4xl border border-white/10 bg-slate-950/80 p-8 shadow-soft">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Portfolio table</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">{industry.name} ISV mapping</h2>
            <p className="mt-4 max-w-2xl text-slate-300">Filter by touchpoint to zoom in on the partner solutions and outcomes that support each area of the journey.</p>
          </div>
          <div className="flex items-center gap-3 rounded-3xl bg-slate-900/80 px-4 py-3">
            <BarChart3 size={18} className="text-slate-300" />
            <span className="text-sm text-slate-200">{industry.portfolioTable.length} rows</span>
          </div>
        </div>
      </div>

      <div className="rounded-4xl border border-white/10 bg-slate-900/80 p-6 shadow-soft">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-slate-400">Touchpoint filter</p>
            <select
              value={filter}
              onChange={(event) => setFilter(event.target.value)}
              className="mt-2 rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-white/20"
            >
              {touchpoints.map((option) => (
                <option key={option} value={option} className="bg-slate-950 text-slate-100">{option}</option>
              ))}
            </select>
          </div>
          <Link
            to={`/industry/${industry.id}/step/1`}
            className="inline-flex items-center justify-center rounded-3xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
          >
            Explore journey
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0 text-left text-sm text-slate-200">
            <thead>
              <tr>
                {['Touchpoint', 'Portfolio partners', 'Capabilities delivered', 'Outcomes enabled'].map((label) => (
                  <th key={label} className="border-b border-white/10 bg-slate-950/80 px-4 py-4 font-semibold text-slate-300">{label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.touchpoint} className="border-b border-white/10 last:border-none">
                  <td className="px-4 py-4 align-top">
                    <div className="flex items-center gap-2 text-white">
                      <Icon name={row.icon as keyof typeof ICON_MAP} />
                      <span className="font-semibold">{row.touchpoint}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 align-top">
                    <div className="flex flex-wrap gap-2">
                      {row.portfolioPartners.map((partner) => (
                        <span key={partner} className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs text-slate-200">
                          {partner}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-4 align-top">
                    <ul className="space-y-2">
                      {row.capabilitiesDelivered.map((capability) => (
                        <li key={capability} className="text-slate-300">{capability}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-4 py-4 align-top">
                    <ul className="space-y-2">
                      {row.outcomesEnabled.map((outcome) => (
                        <li key={outcome} className="text-slate-300">{outcome}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-4 py-8 text-center text-slate-400">
                    No portfolio rows match this filter.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function NotFound() {
  return (
    <div className="rounded-4xl border border-white/10 bg-slate-950/80 p-10 text-center shadow-soft">
      <h2 className="text-3xl font-semibold text-white">Page not found</h2>
      <p className="mt-4 text-slate-300">The page you are looking for doesn&apos;t exist or the industry ID is invalid.</p>
      <Link to="/" className="mt-8 inline-flex items-center justify-center rounded-3xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
        Back to landing
      </Link>
    </div>
  );
}

const ICON_MAP = {
  'heart-pulse': HeartPulse,
  'shield-check': ShieldCheck,
  'trending-up': TrendingUp,
  'users': Users,
  'clipboard-list': ClipboardList,
  'watch': Watch,
  'message-circle': MessageCircle,
  'bar-chart-3': BarChart3,
  'user-plus': Users,
  'credit-card': CreditCard,
  'shield-alert': ShieldCheck,
  'message-square': MessageSquare,
  'pie-chart': BarChart3,
  'shopping-cart': ShoppingCart,
  'layers': Layers,
  'sparkles': Sparkles,
  'shopping-bag': ShoppingBag,
  'truck': Truck,
  'headset': PackageCheck,
  'box': PackageCheck
} as const;

function Icon({ name, className }: { name: keyof typeof ICON_MAP; className?: string }) {
  const Component = ICON_MAP[name] ?? Circle;
  return <Component size={18} className={className ?? 'text-slate-400'} />;
}

export default App;
