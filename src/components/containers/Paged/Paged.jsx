import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import css from "./style.module.css";

export default function Paged({ pageCount, page, setPage }) {
	const handleOnChangePage = ({ selected }) => {
		setPage(selected + 1);
	};
	if (pageCount <= 1) return null;
	return (
		<div className={css.paged}>
			<ReactPaginate
				previousLabel={<FaAngleDoubleLeft />}
				nextLabel={<FaAngleDoubleRight />}
				breakLabel="..."
				pageCount={pageCount}
				marginPagesDisplayed={1}
				pageRangeDisplayed={1}
				onPageChange={handleOnChangePage}
				activeLinkClassName={css.active}
				previousClassName={css.previous}
				nextClassName={css.next}
				forcePage={page - 1}
			/>
		</div>
	);
}
