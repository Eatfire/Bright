import { fileExplorerInterface } from "./components/FileExplorer/types";

const mockData: fileExplorerInterface = {
  items: [
    {
      type: "pdf",
      name: "Employee Handbook",
      added: "2017-01-06",
      size: 44,
    },

    {
      type: "pdf",
      name: "Public Holiday policy",
      added: "2016-12-06",
      size: 2,
    },
    {
      type: "folder",
      name: "Expenses",
      size: 0,
      subFiles: [
        {
          type: "doc",
          name: "Expenses claim form",
          added: "2017-05-02",
          size: 256,
        },
        {
          type: "doc",
          name: "Fuel allowances",
          added: "2017-05-03",
          size: 45,
        },
      ],
    },
    {
      type: "csv",
      name: "Cost centres",
      added: "2016-08-12",
      size: 46,
    },
    {
      type: "folder",
      name: "Misc",
      size: 0,
      subFiles: [
        {
          type: "doc",
          name: "Christmas party",
          added: "2017-12-01",
          size: 97,
        },
        {
          type: "mov",
          name: "Welcome to the company!",
          added: "2015-04-24",
          size: 4,
        },
        {
          type: "folder",
          name: "Misc",
          size: 0,
          subFiles: [
            {
              type: "doc",
              name: "Christmas party",
              added: "2017-12-01",
              size: 97,
            },
            {
              type: "mov",
              name: "Welcome to the company!",
              added: "2015-04-24",
              size: 46,
            },
            {
              type: "folder",
              name: "Misc",
              size: 0,
              subFiles: [
                {
                  type: "doc",
                  name: "Christmas party",
                  added: "2017-12-01",
                  size: 97,
                },
                {
                  type: "mov",
                  name: "Welcome to the company!",
                  added: "2015-04-24",
                  size: 48,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
export default mockData;
