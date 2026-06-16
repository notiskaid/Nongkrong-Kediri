# CONTENT_MODEL.md — Model Konten

## Place

Place adalah data tempat.

Field penting:

- name
- slug
- excerpt
- description
- editorial_notes
- address
- area
- google_maps_url
- price_min
- price_max
- price_label
- rating
- opening_hours
- categories
- use_cases
- facilities
- photos
- meta_title
- meta_description
- status
- last_reviewed_at

## SEO Page

SEO page adalah landing page keyword.

Field penting:

- slug
- page_type
- title
- h1
- description
- content
- query_config
- author
- status
- meta_title
- meta_description
- robots
- published_at
- last_reviewed_at

## Content Blocks

`seo_pages.content` berupa JSON array.

Supported block:

### HTML

```json
{
  "type": "html",
  "html": "<h2>Catatan kurasi</h2><p>Konten bebas...</p>"
}
```

### Markdown-like text

```json
{
  "type": "markdown",
  "content": "Konten teks biasa. Untuk rendering markdown penuh, tambahkan parser nanti."
}
```

### FAQ

```json
{
  "type": "faq",
  "items": [
    {
      "question": "Apa cafe WFC terbaik di Kediri?",
      "answer": "Tergantung kebutuhan: WiFi, colokan, noise, dan area."
    }
  ]
}
```

### Internal Links

```json
{
  "type": "internal_links",
  "title": "Lihat juga",
  "links": [
    { "label": "Cafe 24 Jam Kediri", "href": "/cafe-24-jam-kediri/" }
  ]
}
```

## Editorial Rule

Konten bawah listing jangan dibuat template generic. Isi dengan konteks lokal, pengalaman, tips, dan catatan yang membantu user.
