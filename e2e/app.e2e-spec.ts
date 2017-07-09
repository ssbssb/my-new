import { StudentprofessorPage } from './app.po';

describe('studentprofessor App', () => {
  let page: StudentprofessorPage;

  beforeEach(() => {
    page = new StudentprofessorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
