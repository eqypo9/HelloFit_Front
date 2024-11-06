import IconComponent from '@/components/Asset/Icon';
import ToggleButton from '@/components/ToggleButton';
import Schedule from '@/components/Schedule';

export default function Preview() {
  return (
    <div
      style={{ backgroundColor: '#F6F7F9', height: '100vh', padding: '0 24px' }}
    >
      <h2>Icon Preview</h2>

      <div>
        <p>Sizes: Small, Medium, Large</p>
        <div>
          <IconComponent name="search" size="s" />
          <IconComponent name="search" size="m" />
          <IconComponent name="search" size="l" />
        </div>
      </div>

      <hr />

      <div>
        <p>Custom Sizes:</p>
        <div>
          <IconComponent name="blueHeartBlank" width={36} height={36} />
          <IconComponent name="kakao" alt="Kakao logo" width={48} height={48} />
        </div>
      </div>

      <div>
        <p>Toggle Button</p>
        <ToggleButton />
      </div>

      <div>
        <p>Schedule</p>
        <Schedule />
      </div>
    </div>
  );
}
