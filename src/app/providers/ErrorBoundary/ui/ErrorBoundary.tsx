import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { PageError } from 'widgets/PageError';

interface IErrorProp {
  children: ReactNode;
}

interface IErrorState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<IErrorProp, IErrorState> {
  constructor(props: IErrorProp) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): IErrorState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error, errorInfo);
  }

  render(): ReactNode {
    const { hasError } = this.state;

    if (hasError) {
      return (
        <Suspense fallback="">
          <PageError />
        </Suspense>
      );
    }

    return this.props.children;
  }
}
