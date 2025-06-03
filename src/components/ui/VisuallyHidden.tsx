// components/VisuallyHidden.tsx
const VisuallyHidden = ({ children }: { children: React.ReactNode }) => (
  <span style={{
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0,0,0,0)',
    border: 0,
    whiteSpace: 'nowrap'
  }}>
    {children}
  </span>
);

export default VisuallyHidden;
