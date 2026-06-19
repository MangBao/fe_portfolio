export default function HeroHeader() {
  return (
    <header style={{ flex: "0 0 auto", paddingTop: "10rem" }}>
      {/* Eyebrow */}
      <p className="text-lg text-light mb-4">
        Hey, <span className="inline-block">👋</span> I&apos;m a Full Stack
        Developer
      </p>

      {/* Display Name */}
      <h1 className="text-cyan font-bold uppercase tracking-tight">MBAO DEV</h1>
    </header>
  );
}
