import { MainLayout } from "@/components/layout";
import { WorkList } from "@/components/work";
import { WorkFilters } from "@/components/work/work-filters";
import { useWorkList } from "@/hooks";
import { ListParams, WorkFiltersPayload } from "@/models";
import {
  Box,
  Button,
  Container,
  LinearProgress,
  Pagination,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

export default function WorksPage() {
  const router = useRouter();
  const filters: Partial<ListParams> = {
    _page: 1,
    _limit: 3,
    ...router.query,
  };
  const initFiltersPayload: Partial<WorkFiltersPayload> = {
    search: filters.title_like || "",
  };
  const { data, isLoading } = useWorkList({
    params: filters,
    enabled: router.isReady,
  });
  const { _limit, _totalRows, _page } = data?.pagination || {};
  const totalPage = Boolean(_totalRows) ? Math.ceil(_totalRows / _limit) : 0;

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    router.push(
      {
        pathname: router.pathname,
        query: {
          ...filters,
          _page: value,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  function handleFiltersChange(newFilter: WorkFiltersPayload) {
    router.push(
      {
        pathname: router.pathname,
        query: {
          ...filters,
          _page: 1,
          title_like: newFilter.search,
        },
      },
      undefined,
      { shallow: true }
    );
  }

  return (
    <Box>
      <Container>
        <Box mb={4} mt={8}>
          <Typography component="h1" variant="h3" fontWeight="bold">
            Work
          </Typography>
        </Box>
        {/* isReady khi mà router nó trả về không phải undefined */}

        <WorkList
          isLoading={!router.isReady || isLoading}
          workList={data?.data || []}
        />
        {totalPage > 0 && (
          <Stack alignItems="center">
            <Pagination
              count={totalPage}
              page={_page}
              onChange={handlePageChange}
            ></Pagination>
          </Stack>
        )}
      </Container>
    </Box>
  );
}
WorksPage.Layout = MainLayout;

// export async function getStaticProps() {
//   // const workList= await workApi ( Không được dùng ở phía server)
//   return {
//     props: {},
//   };
// }

// browser call http://localhost:3000/api/works
// Next server : /api/works --> proxy to https://js-post-api.herokyapp.com/api/works
// API server : https://js-post-api.herokuapp.com/api/works
