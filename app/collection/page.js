import CollectionCard from "@/components/widgets/collection-card";
import PageHeader from "@/components/widgets/page-header";
import { collection } from "@/data/collection";

const header = {
	title: "All Collection",
	focus: "Collection",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};

// Metadata
export const metadata = {
	title: header.title,
	description: header.description
};

// Structured Data
const jsonLd = {
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: [
		{
			"@type": "ListItem",
			position: 1,
			name: "Home",
			item: `${process.env.ROOT_URL}`
		},
		{
			"@type": "ListItem",
			position: 2,
			name: header.title,
			item: `${process.env.ROOT_URL}/collection`
		}
	]
};

export default function Category() {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			<PageHeader data={header} />
			<div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 gap-6">
				{collection.map((item) => (
					<CollectionCard key={item.slug} data={item} />
				))}
			</div>
		</>
	);
}
