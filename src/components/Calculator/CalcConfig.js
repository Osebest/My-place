export const ButtonActions = {
  Add: 'add',
  Delete: 'delete',
  Calc: 'calc'
}

export const btn = [
  {
    display: 'C',
    action: ButtonActions.Delete,
    class: 'calcBtn op'
  },
  {
    display: '(',
    action: ButtonActions.Add,
    class: 'calcBtn op'
  },
  {
    display: ')',
    action: ButtonActions.Add,
    class: 'calcBtn op'
  },
  {
    display: '/',
    action: ButtonActions.Add,
    class: 'calcBtn op'
  },
  {
    display: '7',
    action: ButtonActions.Add,
    class: 'calcBtn'
  },
  {
    display: '8',
    action: ButtonActions.Add,
    class: 'calcBtn'
  },
  {
    display: '9',
    action: ButtonActions.Add,
    class: 'calcBtn'
  },
  {
    display: 'x',
    action: ButtonActions.Add,
    class: 'calcBtn op'
  },
  {
    display: '4',
    action: ButtonActions.Add,
    class: 'calcBtn'
  },
  {
    display: '5',
    action: ButtonActions.Add,
    class: 'calcBtn'
  },
  {
    display: '6',
    action: ButtonActions.Add,
    class: 'calcBtn'
  },
  {
    display: '-',
    action: ButtonActions.Add,
    class: 'calcBtn op'
  },
  {
    display: '1',
    action: ButtonActions.Add,
    class: 'calcBtn'
  },
  {
    display: '2',
    action: ButtonActions.Add,
    class: 'calcBtn'
  },
  {
    display: '3',
    action: ButtonActions.Add,
    class: 'calcBtn'
  },
  {
    display: '+',
    action: ButtonActions.Add,
    class: 'calcBtn op'
  },
  {
    display: '.',
    action: ButtonActions.Add,
    class: 'calcBtn'
  },
  {
    display: '0',
    action: ButtonActions.Add,
    class: 'calcBtn'
  },
  {
    display: '=',
    action: ButtonActions.Calc,
    class: 'op equals'
  }
]