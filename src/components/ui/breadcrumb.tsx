import Link from 'next/link';
import { Children } from 'react';
import { Fragment } from 'react';
import { Url } from 'url';

interface IBreadcrumbItemProps {
  children: React.ReactNode;
  href: string;
}

interface IBreadcrumbItem {
  (props: IBreadcrumbItemProps): JSX.Element;
}
const Breadcrumb = ({ children }: { children: React.ReactNode }) => {
  const childrenArray = Children.toArray(children);

  console.log(childrenArray);

  const childrenWtihSeperator = childrenArray.map((child, index) => {
    if (index !== childrenArray.length - 1) {
      return (
        <Fragment key={index}>
          {child}
          <span>/</span>
        </Fragment>
      );
    }
    return child;
  });
  return (
    <nav className='mx-8 md:mx-16 lg:mx-32 mt-8'>
      <ul className='flex items-center space-x-4'>{childrenWtihSeperator}</ul>
    </nav>
  );
};

const BreadcrumbItem: IBreadcrumbItem = ({ children, href, ...props }) => {
  return (
    <li {...props}>
      <Link href={href} passHref>
        <a>{children}</a>
      </Link>
    </li>
  );
};

export { Breadcrumb, BreadcrumbItem };
