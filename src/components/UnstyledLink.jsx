import { Link } from 'react-router-dom';

export default function UnstyledLink({
  href,
  className = '',
  openNewTab,
  children,
  ...rest
}) {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  // If is internal link, and no override specified
  if (isInternalLink && openNewTab === undefined) {
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    );
  }

  // If no override then _blank
  // if there is override then use the boolean
  return (
    <a
      href={href}
      className={className}
      target={openNewTab === undefined || openNewTab ? '_blank' : undefined}
      rel='noopener noreferrer'
      {...rest}
    >
      {children}
    </a>
  );
}
