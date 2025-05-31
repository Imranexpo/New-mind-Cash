import React from 'react';
import { HomeIcon, ListChecks, BarChart } from 'lucide-react';
import '../style/StudentDash.css';
import { UserProfile } from './ProfileView';
import SchoolIcon from '@mui/icons-material/School';

function Header() {
  const NavItem = ({ href, icon: IconComponent, isActive, children }) => {
    return (
      <a
        href={href}
        className={`nav-link ${isActive ? 'navbar-item-active' : ''}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '.5rem .75rem',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: '500',
          background: isActive ? 'hsl(var(--secondary) / 0.10)' : 'transparent',
          color: isActive ? 'rgb(108 99 172 / 1)' : 'inherit',
        }}
      >
        {IconComponent && <IconComponent style={{ marginRight: '8px' }} />}
        {children}
      </a>
    );
  };
  return (
    <nav className="bg-white shadow-sm py-3 px-4 sticky top-0 z-10 mb-4">
      <div className="container-fuild mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-10">
            <span className="flex items-center gap-2">
              <SchoolIcon style={{ fontSize: '30px', marginBottom: '2px' }} />
              <div className="text-brand font-bold text-2xl">
                MindCash
              </div>
            </span>
            <div className="hidden md:flex items-center gap-1">
              <NavItem href="/" icon={HomeIcon} isActive={true}>Home</NavItem>
              <NavItem href="/tests" icon={ListChecks}>Tests</NavItem>
              <NavItem href="/results" icon={BarChart}>Results</NavItem>
            </div>
          </div>
          <UserProfile />
        </div>
      </div>
    </nav>
  );
}

export default Header;
