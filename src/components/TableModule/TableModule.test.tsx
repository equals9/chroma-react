import { fireEvent } from '@testing-library/dom';
import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import {
  TableConfiguration,
  TableHeader,
  TableModule,
  TableSortState,
  testIds,
} from './index';

const testId = 'TableModule';

const configWithCellContent: Array<TableConfiguration> = [
  {
    header: {
      label: 'Description',
    },
    cell: {
      content: (dataValue: any) => {
        return dataValue.description;
      },
    },
  },
  {
    header: {
      label: 'Calories',
    },
    cell: {
      content: (dataValue: any) => {
        return dataValue.calories;
      },
    },
  },
];

const configWithCellValuePath: Array<TableConfiguration> = [
  {
    header: {
      label: 'Description',
    },
    cell: {
      valuePath: 'description',
    },
  },
  {
    header: {
      label: 'Calories',
    },
    cell: {
      valuePath: 'calories',
    },
  },
];

const data = [
  {
    description: 'Frozen yoghurt',
    calories: '159',
  },
  {
    description: 'Ice cream sandwich',
    calories: '237',
  },
];

test('it renders an empty table', async () => {
  const { findByTestId, queryAllByTestId } = renderWithTheme(
    <TableModule data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();

  const rows = queryAllByTestId(testIds.bodyRow);
  expect(rows?.length).toEqual(0);
});

test('it renders the provided "noResultsMessage"', async () => {
  const text = '0 things';
  const { findByText } = renderWithTheme(
    <TableModule
      data-testid={testId}
      config={configWithCellContent}
      data={[]}
      noResultsMessage={text}
    />
  );

  const root = await findByText(text);
  expect(root).toBeInTheDocument();
});

test('it renders columns using "header.label"', async () => {
  const config: Array<TableConfiguration> = [
    {
      header: {
        label: 'Description',
      },
      cell: {
        valuePath: 'description',
      },
    },
    {
      header: {
        label: 'Calories',
      },
      cell: {
        valuePath: 'calories',
      },
    },
  ];

  const { findAllByTestId } = renderWithTheme(
    <TableModule data-testid={testId} config={config} />
  );
  const columns = await findAllByTestId(testIds.headerCell);
  expect(columns?.length).toEqual(2);
  expect(columns?.[0].textContent).toEqual('Description');
  expect(columns?.[1].textContent).toEqual('Calories');
});

test('it renders columns using "header.content"', async () => {
  const config: Array<TableConfiguration> = [
    {
      header: {
        content: (header: TableHeader) => {
          return `${header.label}0`;
        },
      },
      cell: {
        valuePath: 'description',
      },
    },
    {
      header: {
        content: (header: TableHeader) => {
          return `${header.label}1`;
        },
      },
      cell: {
        valuePath: 'calories',
      },
    },
  ];

  const { findAllByTestId } = renderWithTheme(
    <TableModule data-testid={testId} config={config} />
  );

  const columns = await findAllByTestId(testIds.headerCell);
  expect(columns?.length).toEqual(2);
  expect(columns?.[0].textContent).toEqual('undefined0');
  expect(columns?.[1].textContent).toEqual('undefined1');
});

test('it renders a table with data using "cell.content"', async () => {
  const { findAllByTestId } = renderWithTheme(
    <TableModule
      data-testid={testId}
      config={configWithCellContent}
      data={data}
    />
  );

  const rows = await findAllByTestId(testIds.bodyRow);
  expect(rows?.length).toEqual(2);

  const rowCells = await findAllByTestId(testIds.bodyCell);
  expect(rowCells?.length).toEqual(4);
  expect(rowCells?.[0]?.textContent).toEqual(data[0].description);
  expect(rowCells?.[1]?.textContent).toEqual(data[0].calories);
  expect(rowCells?.[2]?.textContent).toEqual(data[1].description);
  expect(rowCells?.[3]?.textContent).toEqual(data[1].calories);
});

test('it renders a table with data using "cell.valuePath"', async () => {
  const { findAllByTestId } = renderWithTheme(
    <TableModule
      data-testid={testId}
      config={configWithCellValuePath}
      data={data}
    />
  );

  const rows = await findAllByTestId(testIds.bodyRow);
  expect(rows?.length).toEqual(2);

  const rowCells = await findAllByTestId(testIds.bodyCell);
  expect(rowCells?.length).toEqual(4);
  expect(rowCells?.[0]?.textContent).toEqual(data[0].description);
  expect(rowCells?.[1]?.textContent).toEqual(data[0].calories);
  expect(rowCells?.[2]?.textContent).toEqual(data[1].description);
  expect(rowCells?.[3]?.textContent).toEqual(data[1].calories);
});

test('it applies the provided class to a cell with data using "cell.className"', async () => {
  const config: Array<TableConfiguration> = [
    {
      header: {
        label: 'foo',
      },
      cell: {
        valuePath: 'description',
        className: 'cell1-custom-class',
      },
    },
    {
      header: {
        label: 'bar',
      },
      cell: {
        valuePath: 'calories',
        className: 'cell2-custom-class',
      },
    },
  ];

  const { findByText } = renderWithTheme(
    <TableModule data-testid={testId} config={config} data={data} />
  );

  const cell1 = await findByText(data[0].description);
  expect(cell1).toHaveClass('cell1-custom-class');

  const cell2 = await findByText(data[0].calories);
  expect(cell2).toHaveClass('cell2-custom-class');
});

test('it respects the "align" properties on "config"', async () => {
  const config: Array<TableConfiguration> = [
    {
      header: {
        align: 'right',
        label: 'Description',
      },
      cell: {
        align: 'right',
        valuePath: 'description',
      },
    },
    {
      header: {
        align: 'right',
        label: 'Calories',
      },
      cell: {
        align: 'right',
        valuePath: 'calories',
      },
    },
  ];

  const { findAllByTestId } = renderWithTheme(
    <TableModule data-testid={testId} config={config} data={data} />
  );

  const headerCells = await findAllByTestId(testIds.headerCell);
  expect(headerCells?.length).toEqual(2);
  expect(headerCells?.[0]).toHaveClass('ChromaTableHeaderCell-rootAlignRight');
  expect(headerCells?.[1]).toHaveClass('ChromaTableHeaderCell-rootAlignRight');

  const bodyCells = await findAllByTestId(testIds.bodyCell);
  expect(bodyCells?.length).toEqual(4);
  expect(bodyCells?.[0]).toHaveClass(
    'ChromaTableModule-tableRowCellAlignRight'
  );
  expect(bodyCells?.[1]).toHaveClass(
    'ChromaTableModule-tableRowCellAlignRight'
  );
  expect(bodyCells?.[2]).toHaveClass(
    'ChromaTableModule-tableRowCellAlignRight'
  );
  expect(bodyCells?.[3]).toHaveClass(
    'ChromaTableModule-tableRowCellAlignRight'
  );
});

test('it renders a single column table appropriately', async () => {
  const config: Array<TableConfiguration> = [
    {
      header: {
        label: 'Description',
      },
      cell: {
        valuePath: 'description',
      },
    },
  ];

  const { findAllByTestId } = renderWithTheme(
    <TableModule data-testid={testId} config={config} data={[data[0]]} />
  );

  const headerCells = await findAllByTestId(testIds.headerCell);
  expect(headerCells?.length).toEqual(1);
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <TableModule data-testid={testId} className="custom-class-name" />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('custom-class-name');
});

test('it renders the loading indicator when "isLoading"', () => {
  const { getByRole } = renderWithTheme(
    <TableModule data-testid={testId} isLoading />
  );
  const root = getByRole('progressbar', { hidden: true });
  expect(root).toBeTruthy();
});

test('it calls the provided "onRowClick" handler with row info', async () => {
  const handleRowClick = jest.fn();

  const { findByTestId } = renderWithTheme(
    <TableModule
      data-testid={testId}
      config={configWithCellContent}
      data={data}
      onRowClick={handleRowClick}
    />
  );
  const root = await findByTestId(testId);
  const row = root.querySelector('table > tbody > tr');
  if (!row) {
    throw new Error('could not find a row');
  }

  fireEvent.click(row);
  expect(handleRowClick).toBeCalledTimes(1);
  expect(handleRowClick).toBeCalledWith(data[0]);
});

test('it sets the "tr" role="link" when provided', async () => {
  const { findAllByRole } = renderWithTheme(
    <TableModule
      data-testid={testId}
      config={configWithCellValuePath}
      data={data}
      rowRole="link"
    />
  );
  const [tr] = await findAllByRole('link');
  expect(tr).toBeInTheDocument();
  expect(tr?.nodeName).toEqual('TR');
});

test('it applies "maxCellWidth=1"', async () => {
  const { findAllByTestId } = renderWithTheme(
    <TableModule
      data-testid={testId}
      config={configWithCellValuePath}
      data={data}
      rowRole="link"
      maxCellWidth={1}
    />
  );
  const [cell] = await findAllByTestId(testIds.bodyCell);
  expect(cell).toHaveClass('ChromaTableModule-tableRowCellMaxWidth1');
});

test('it applies "maxCellWidth=2"', async () => {
  const { findAllByTestId } = renderWithTheme(
    <TableModule
      data-testid={testId}
      config={configWithCellValuePath}
      data={data}
      rowRole="link"
      maxCellWidth={2}
    />
  );
  const [cell] = await findAllByTestId(testIds.bodyCell);
  expect(cell).toHaveClass('ChromaTableModule-tableRowCellMaxWidth2');
});

//#region sorting tests

test('it sorts on column click from no sort => sort asc', async () => {
  const sortFn = jest.fn();

  const config: Array<TableConfiguration> = [
    {
      header: {
        label: 'Description',
        onSort: sortFn,
      },
      cell: {
        valuePath: 'description',
      },
    },
    {
      header: {
        label: 'Calories',
        onSort: sortFn,
      },
      cell: {
        valuePath: 'calories',
      },
    },
  ];

  const data = [
    {
      foo: 'foo1',
      bar: 'bar1',
    },
    {
      foo: 'foo2',
      bar: 'bar2',
    },
  ];

  const { findByTestId } = renderWithTheme(
    <TableModule data-testid={testId} config={config} data={data} />
  );

  const root = await findByTestId(testId);
  const header = root.querySelector('th');
  if (!header) {
    throw new Error('no "th" element found');
  }

  fireEvent.click(header);
  expect(sortFn).toBeCalledTimes(1);
  expect(sortFn).toBeCalledWith({
    index: 0,
    header: config[0].header,
    sortDirection: 'asc',
  });
});

test('it sorts on column click from no sort => sort asc => sort desc', async () => {
  const sortFn = jest.fn();

  const config: Array<TableConfiguration> = [
    {
      header: {
        label: 'Description',
        onSort: sortFn,
      },
      cell: {
        valuePath: 'description',
      },
    },
    {
      header: {
        label: 'Calories',
        onSort: sortFn,
      },
      cell: {
        valuePath: 'calories',
      },
    },
  ];

  const data = [
    {
      foo: 'foo1',
      bar: 'bar1',
    },
    {
      foo: 'foo2',
      bar: 'bar2',
    },
  ];

  const { findByTestId } = renderWithTheme(
    <TableModule data-testid={testId} config={config} data={data} />
  );

  const root = await findByTestId(testId);
  const header = root.querySelector('th');
  if (!header) {
    throw new Error('no "th" element found');
  }

  // null => asc
  fireEvent.click(header);
  // asc => desc
  fireEvent.click(header);
  expect(sortFn).toBeCalledTimes(2);
  expect(sortFn.mock.calls[1]).toEqual([
    {
      index: 0,
      header: config[0].header,
      sortDirection: 'desc',
    },
  ]);
});

test('it sorts on column click from no sort => sort asc => sort desc => no sort', async () => {
  const sortFn = jest.fn();

  const config: Array<TableConfiguration> = [
    {
      header: {
        label: 'Description',
        onSort: sortFn,
      },
      cell: {
        valuePath: 'description',
      },
    },
    {
      header: {
        label: 'Calories',
        onSort: sortFn,
      },
      cell: {
        valuePath: 'calories',
      },
    },
  ];

  const data = [
    {
      foo: 'foo1',
      bar: 'bar1',
    },
    {
      foo: 'foo2',
      bar: 'bar2',
    },
  ];

  const { findByTestId } = renderWithTheme(
    <TableModule data-testid={testId} config={config} data={data} />
  );

  const root = await findByTestId(testId);
  const header = root.querySelector('th');
  if (!header) {
    throw new Error('no "th" element found');
  }

  // null => asc
  fireEvent.click(header);
  // asc => desc
  fireEvent.click(header);
  // desc => null
  fireEvent.click(header);

  expect(sortFn).toBeCalledTimes(3);
  expect(sortFn.mock.calls[2]).toEqual([
    {
      index: 0,
      header: config[0].header,
      sortDirection: null,
    },
  ]);
});

test('it sorts by first column click, then resets sort when a secondary column is clicked', async () => {
  const col1SortFn = jest.fn();
  const col2SortFn = jest.fn();

  const config: Array<TableConfiguration> = [
    {
      header: {
        label: 'Description',
        onSort: col1SortFn,
      },
      cell: {
        valuePath: 'description',
      },
    },
    {
      header: {
        label: 'Calories',
        onSort: col2SortFn,
      },
      cell: {
        valuePath: 'calories',
      },
    },
  ];

  const data = [
    {
      foo: 'foo1',
      bar: 'bar1',
    },
    {
      foo: 'foo2',
      bar: 'bar2',
    },
  ];

  const { findByTestId } = renderWithTheme(
    <TableModule data-testid={testId} config={config} data={data} />
  );

  const root = await findByTestId(testId);
  const headers = root.querySelectorAll('th');

  expect(headers.length).toEqual(2);

  const header1 = headers.item(0);
  const header2 = headers.item(1);

  // Click first column
  fireEvent.click(header1);
  expect(col1SortFn).toBeCalledTimes(1);
  expect(col1SortFn).toBeCalledWith({
    index: 0,
    header: config[0].header,
    sortDirection: 'asc',
  });

  // Now click second column
  fireEvent.click(header2);
  expect(col2SortFn).toBeCalledTimes(1);
  expect(col2SortFn).toBeCalledWith({
    index: 1,
    header: config[1].header,
    sortDirection: 'asc',
  });
});

test('it uses the provided "sortState"', async () => {
  const sortState: TableSortState = { sortKey: 1, sortDirection: 'desc' };
  const { findAllByTestId } = renderWithTheme(
    <TableModule
      data-testid={testId}
      config={configWithCellContent}
      data={data}
      sortState={sortState}
    />
  );

  const headers = await findAllByTestId(testIds.headerCell);
  expect(headers?.length).toEqual(2);
  expect(headers?.[0]?.getAttribute('aria-sort')).toEqual('none');
  expect(headers?.[1]?.getAttribute('aria-sort')).toEqual('descending');
});

//#endregion
