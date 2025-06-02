import { designers } from '@/data/designers';
import './DesignerSelector.css';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement> | string) => void;
}

const DesignerSelector = ({ value, onChange }: Props) => {
  const handleSelect = (name: string) => {
    onChange({ target: { name: 'designer', value: name } } as any);
  };

  return (
    <div className="designer-selector">
      <h3 className="designer-heading">Choose Your Artist</h3>
      <div className="designer-grid">
        {designers.map((designer) => (
          <div
            key={designer.name}
            className={`designer-card ${value === designer.name ? 'selected' : ''}`}
            onClick={() => handleSelect(designer.name)}
          >
            <h4 className="designer-name">{designer.name}</h4>
            <p className="designer-bio">{designer.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignerSelector;
