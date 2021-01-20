const express = require("express");

const createService = () => {
  const app = express();
  
  app.use('/quotes', async (req, res) => {
    let q = [];
    if (req.query.tag) {
      q = quotes.filter(x => x.tags.includes(req.query.tag))
    } else if (req.query.author) {
      q = quotes.filter(x => x.author.includes(req.query.author))
    } else {
      q = quotes;
    }
    res.json({ data: q });
  });
  
  app.use('/authors', async (req, res) => {
    let a = [];
    if (req.query.name) {
      a = authors.filter(x => x.name.includes(req.query.name))
    } else {
      a = authors;
    }
    res.json({ data: a });
  });

  return app;
};

module.exports = { createService }; 

const quotes = [
  {
    "author": "Albert Einstein",
    "text": "“The world as we have created it is a process of o",
    "tags": [
      "change",
      "deep-thoughts",
      "thinking",
      "world"
    ]
  },
  {
    "author": "J.K. Rowling",
    "text": "“It is our choices, Harry, that show what we truly",
    "tags": [
      "abilities",
      "choices"
    ]
  },
  {
    "author": "Albert Einstein",
    "text": "“There are only two ways to live your life. One is",
    "tags": [
      "inspirational",
      "life",
      "live",
      "miracle",
      "miracles"
    ]
  },
  {
    "author": "Jane Austen",
    "text": "“The person, be it gentleman or lady, who has not text",
    "tags": [
      "aliteracy",
      "books",
      "classic",
      "humor"
    ]
  },
  {
    "author": "Marilyn Monroe",
    "text": "“Imperfection is beauty, madness is genius and it'",
    "tags": [
      "be-yourself",
      "inspirational"
    ]
  },
  {
    "author": "Albert Einstein",
    "text": "“Try not to become a man of success. Rather become",
    "tags": [
      "adulthood",
      "success",
      "value"
    ]
  },
  {
    "author": "André Gide",
    "text": "“It is better to be hated for what you are than to",
    "tags": [
      "life",
      "love"
    ]
  },
  {
    "author": "Thomas A. Edison",
    "text": "“I have not failed. I've just found 10,000 ways th",
    "tags": [
      "edison",
      "failure",
      "inspirational",
      "paraphrased"
    ]
  },
  {
    "author": "Eleanor Roosevelt",
    "text": "“A woman is like a tea bag; you never know how str",
    "tags": [
      "misattributed-eleanor-roosevelt"
    ]
  },
  {
    "author": "Steve Martin",
    "text": "“A day without sunshine is like, you know, night.”",
    "tags": [
      "humor",
      "obvious",
      "simile"
    ]
  },
  {
    "author": "Marilyn Monroe",
    "text": "“This life is what you make it. No matter what, yo",
    "tags": [
      "friends",
      "heartbreak",
      "inspirational",
      "life",
      "love",
      "sisters"
    ]
  },
  {
    "author": "J.K. Rowling",
    "text": "“It takes a great deal of bravery to stand up to o",
    "tags": [
      "courage",
      "friends"
    ]
  },
  {
    "author": "Albert Einstein",
    "text": "“If you can't explain it to a six year old, you do",
    "tags": [
      "simplicity",
      "understand"
    ]
  },
  {
    "author": "Bob Marley",
    "text": "“You may not be her first, her last, or her only. text",
    "tags": [
      "love"
    ]
  },
  {
    "author": "Dr. Seuss",
    "text": "“I like nonsense, it wakes up the brain cells. Fan",
    "tags": [
      "fantasy"
    ]
  },
  {
    "author": "Douglas Adams",
    "text": "“I may not have gone where I intended to go, but I",
    "tags": [
      "life",
      "navigation"
    ]
  },
  {
    "author": "Elie Wiesel",
    "text": "“The opposite of love is not hate, it's indifferen",
    "tags": [
      "activism",
      "apathy",
      "hate",
      "indifference",
      "inspirational",
      "love",
      "opposite",
      "philosophy"
    ]
  },
  {
    "author": "Friedrich Nietzsche",
    "text": "“It is not a lack of love, but a lack of friendshi",
    "tags": [
      "friendship",
      "lack-of-friendship",
      "lack-of-love",
      "love",
      "marriage",
      "unhappy-marriage"
    ]
  },
  {
    "author": "Mark Twain",
    "text": "“Good friends, good books, and a sleepy conscience",
    "tags": [
      "books",
      "contentment",
      "friends",
      "friendship",
      "life"
    ]
  },
  {
    "author": "Allen Saunders",
    "text": "“Life is what happens to us while we are making ot",
    "tags": [
      "fate",
      "life",
      "misattributed-john-lennon",
      "planning",
      "plans"
    ]
  },
  {
    "author": "Pablo Neruda",
    "text": "“I love you without knowing how, or when, or from text",
    "tags": [
      "love",
      "poetry"
    ]
  },
  {
    "author": "Ralph Waldo Emerson",
    "text": "“For every minute you are angry you lose sixty sec",
    "tags": [
      "happiness"
    ]
  },
  {
    "author": "Mother Teresa",
    "text": "“If you judge people, you have no time to love the",
    "tags": [
      "attributed-no-source"
    ]
  },
  {
    "author": "Garrison Keillor",
    "text": "“Anyone who thinks sitting in church can make you text",
    "tags": [
      "humor",
      "religion"
    ]
  },
  {
    "author": "Jim Henson",
    "text": "“Beauty is in the eye of the beholder and it may b",
    "tags": [
      "humor"
    ]
  },
  {
    "author": "Dr. Seuss",
    "text": "“Today you are You, that is truer than true. There",
    "tags": [
      "comedy",
      "life",
      "yourself"
    ]
  },
  {
    "author": "Albert Einstein",
    "text": "“If you want your children to be intelligent, read",
    "tags": [
      "children",
      "fairy-tales"
    ]
  },
  {
    "author": "J.K. Rowling",
    "text": "“It is impossible to live without failing at somet",
    "tags": []
  },
  {
    "author": "Albert Einstein",
    "text": "“Logic will get you from A to Z; imagination will text",
    "tags": [
      "imagination"
    ]
  },
  {
    "author": "Bob Marley",
    "text": "“One good thing about music, when it hits you, you",
    "tags": [
      "music"
    ]
  },
  {
    "author": "Dr. Seuss",
    "text": "“The more that you read, the more things you will text",
    "tags": [
      "learning",
      "reading",
      "seuss"
    ]
  },
  {
    "author": "J.K. Rowling",
    "text": "“Of course it is happening inside your head, Harry",
    "tags": [
      "dumbledore"
    ]
  },
  {
    "author": "Bob Marley",
    "text": "“The truth is, everyone is going to hurt you. You text",
    "tags": [
      "friendship"
    ]
  },
  {
    "author": "Mother Teresa",
    "text": "“Not all of us can do great things. But we can do text",
    "tags": [
      "misattributed-to-mother-teresa",
      "paraphrased"
    ]
  },
  {
    "author": "J.K. Rowling",
    "text": "“To the well-organized mind, death is but the next",
    "tags": [
      "death",
      "inspirational"
    ]
  },
  {
    "author": "Charles M. Schulz",
    "text": "“All you need is love. But a little chocolate now text",
    "tags": [
      "chocolate",
      "food",
      "humor"
    ]
  },
  {
    "author": "William Nicholson",
    "text": "“We read to know we're not alone.”",
    "tags": [
      "misattributed-to-c-s-lewis",
      "reading"
    ]
  },
  {
    "author": "Albert Einstein",
    "text": "“Any fool can know. The point is to understand.”",
    "tags": [
      "knowledge",
      "learning",
      "understanding",
      "wisdom"
    ]
  },
  {
    "author": "Jorge Luis Borges",
    "text": "“I have always imagined that Paradise will be a ki",
    "tags": [
      "books",
      "library"
    ]
  },
  {
    "author": "George Eliot",
    "text": "“It is never too late to be what you might have be",
    "tags": [
      "inspirational"
    ]
  },
  {
    "author": "George R.R. Martin",
    "text": "“A reader lives a thousand lives before he dies, s",
    "tags": [
      "read",
      "readers",
      "reading",
      "reading-books"
    ]
  },
  {
    "author": "C.S. Lewis",
    "text": "“You can never get a cup of tea large enough or a text",
    "tags": [
      "books",
      "inspirational",
      "reading",
      "tea"
    ]
  },
  {
    "author": "Marilyn Monroe",
    "text": "“You believe lies so you eventually learn to trust",
    "tags": []
  },
  {
    "author": "Marilyn Monroe",
    "text": "“If you can make a woman laugh, you can make her d",
    "tags": [
      "girls",
      "love"
    ]
  },
  {
    "author": "Albert Einstein",
    "text": "“Life is like riding a bicycle. To keep your balan",
    "tags": [
      "life",
      "simile"
    ]
  },
  {
    "author": "Marilyn Monroe",
    "text": "“The real lover is the man who can thrill you by k",
    "tags": [
      "love"
    ]
  },
  {
    "author": "Marilyn Monroe",
    "text": "“A wise girl kisses but doesn't love, listens but text",
    "tags": [
      "attributed-no-source"
    ]
  },
  {
    "author": "Martin Luther King Jr.",
    "text": "“Only in the darkness can you see the stars.”",
    "tags": [
      "hope",
      "inspirational"
    ]
  },
  {
    "author": "J.K. Rowling",
    "text": "“It matters not what someone is born, but what the",
    "tags": [
      "dumbledore"
    ]
  },
  {
    "author": "James Baldwin",
    "text": "“Love does not begin and end the way we seem to th",
    "tags": [
      "love"
    ]
  },
  {
    "author": "Jane Austen",
    "text": "“There is nothing I would not do for those who are",
    "tags": [
      "friendship",
      "love"
    ]
  },
  {
    "author": "Eleanor Roosevelt",
    "text": "“Do one thing every day that scares you.”",
    "tags": [
      "attributed",
      "fear",
      "inspiration"
    ]
  },
  {
    "author": "Marilyn Monroe",
    "text": "“I am good, but not an angel. I do sin, but I am n",
    "tags": [
      "attributed-no-source"
    ]
  },
  {
    "author": "Albert Einstein",
    "text": "“If I were not a physicist, I would probably be a text",
    "tags": [
      "music"
    ]
  },
  {
    "author": "Haruki Murakami",
    "text": "“If you only read the books that everyone else is text",
    "tags": [
      "books",
      "thought"
    ]
  },
  {
    "author": "Alexandre Dumas fils",
    "text": "“The difference between genius and stupidity is: g",
    "tags": [
      "misattributed-to-einstein"
    ]
  },
  {
    "author": "Stephenie Meyer",
    "text": "“He's like a drug for you, Bella.”",
    "tags": [
      "drug",
      "romance",
      "simile"
    ]
  },
  {
    "author": "Ernest Hemingway",
    "text": "“There is no friend as loyal as a book.”",
    "tags": [
      "books",
      "friends",
      "novelist-quotes"
    ]
  },
  {
    "author": "Helen Keller",
    "text": "“When one door of happiness closes, another opens;",
    "tags": [
      "inspirational"
    ]
  },
  {
    "author": "George Bernard Shaw",
    "text": "“Life isn't about finding yourself. Life is about text",
    "tags": [
      "inspirational",
      "life",
      "yourself"
    ]
  },
  {
    "author": "Charles Bukowski",
    "text": "“That's the problem with drinking, I thought, as I",
    "tags": [
      "alcohol"
    ]
  },
  {
    "author": "Suzanne Collins",
    "text": "“You don’t forget the face of the person who was y",
    "tags": [
      "the-hunger-games"
    ]
  },
  {
    "author": "Suzanne Collins",
    "text": "“Remember, we're madly in love, so it's all right text",
    "tags": [
      "humor"
    ]
  },
  {
    "author": "C.S. Lewis",
    "text": "“To love at all is to be vulnerable. Love anything",
    "tags": [
      "love"
    ]
  },
  {
    "author": "J.R.R. Tolkien",
    "text": "“Not all those who wander are lost.”",
    "tags": [
      "bilbo",
      "journey",
      "lost",
      "quest",
      "travel",
      "wander"
    ]
  },
  {
    "author": "J.K. Rowling",
    "text": "“Do not pity the dead, Harry. Pity the living, and",
    "tags": [
      "live-death-love"
    ]
  },
  {
    "author": "Ernest Hemingway",
    "text": "“There is nothing to writing. All you do is sit do",
    "tags": [
      "good",
      "writing"
    ]
  },
  {
    "author": "Ralph Waldo Emerson",
    "text": "“Finish each day and be done with it. You have don",
    "tags": [
      "life",
      "regrets"
    ]
  },
  {
    "author": "Mark Twain",
    "text": "“I have never let my schooling interfere with my e",
    "tags": [
      "education"
    ]
  },
  {
    "author": "Dr. Seuss",
    "text": "“I have heard there are troubles of more than one text",
    "tags": [
      "troubles"
    ]
  },
  {
    "author": "Alfred Tennyson",
    "text": "“If I had a flower for every time I thought of you",
    "tags": [
      "friendship",
      "love"
    ]
  },
  {
    "author": "Charles Bukowski",
    "text": "“Some people never go crazy. What truly horrible l",
    "tags": [
      "humor"
    ]
  },
  {
    "author": "Terry Pratchett",
    "text": "“The trouble with having an open mind, of course, text",
    "tags": [
      "humor",
      "open-mind",
      "thinking"
    ]
  },
  {
    "author": "Dr. Seuss",
    "text": "“Think left and think right and think low and thin",
    "tags": [
      "humor",
      "philosophy"
    ]
  },
  {
    "author": "J.D. Salinger",
    "text": "“What really knocks me out is a book that, when yo",
    "tags": [
      "authors",
      "books",
      "literature",
      "reading",
      "writing"
    ]
  },
  {
    "author": "George Carlin",
    "text": "“The reason I talk to myself is because I’m the on",
    "tags": [
      "humor",
      "insanity",
      "lies",
      "lying",
      "self-indulgence",
      "truth"
    ]
  },
  {
    "author": "John Lennon",
    "text": "“You may say I'm a dreamer, but I'm not the only o",
    "tags": [
      "beatles",
      "connection",
      "dreamers",
      "dreaming",
      "dreams",
      "hope",
      "inspirational",
      "peace"
    ]
  },
  {
    "author": "W.C. Fields",
    "text": "“I am free of all prejudice. I hate everyone equal",
    "tags": [
      "humor",
      "sinister"
    ]
  },
  {
    "author": "Ayn Rand",
    "text": "“The question isn't who is going to let me; it's w",
    "tags": []
  },
  {
    "author": "Mark Twain",
    "text": "“′Classic′ - a book which people praise and don't text",
    "tags": [
      "books",
      "classic",
      "reading"
    ]
  },
  {
    "author": "Albert Einstein",
    "text": "“Anyone who has never made a mistake has never tri",
    "tags": [
      "mistakes"
    ]
  },
  {
    "author": "Jane Austen",
    "text": "“A lady's imagination is very rapid; it jumps from",
    "tags": [
      "humor",
      "love",
      "romantic",
      "women"
    ]
  },
  {
    "author": "J.K. Rowling",
    "text": "“Remember, if the time should come when you have t",
    "tags": [
      "integrity"
    ]
  },
  {
    "author": "Jane Austen",
    "text": "“I declare after all there is no enjoyment like re",
    "tags": [
      "books",
      "library",
      "reading"
    ]
  },
  {
    "author": "Jane Austen",
    "text": "“There are few people whom I really love, and stil",
    "tags": [
      "elizabeth-bennet",
      "jane-austen"
    ]
  },
  {
    "author": "C.S. Lewis",
    "text": "“Some day you will be old enough to start reading text",
    "tags": [
      "age",
      "fairytales",
      "growing-up"
    ]
  },
  {
    "author": "C.S. Lewis",
    "text": "“We are not necessarily doubting that God will do text",
    "tags": [
      "god"
    ]
  },
  {
    "author": "Mark Twain",
    "text": "“The fear of death follows from the fear of life. text",
    "tags": [
      "death",
      "life"
    ]
  },
  {
    "author": "Mark Twain",
    "text": "“A lie can travel half way around the world while text",
    "tags": [
      "misattributed-mark-twain",
      "truth"
    ]
  },
  {
    "author": "C.S. Lewis",
    "text": "“I believe in Christianity as I believe that the s",
    "tags": [
      "christianity",
      "faith",
      "religion",
      "sun"
    ]
  },
  {
    "author": "J.K. Rowling",
    "text": "“The truth.\" Dumbledore sighed. \"It is a beautiful",
    "tags": [
      "truth"
    ]
  },
  {
    "author": "Jimi Hendrix",
    "text": "“I'm the one that's got to die when it's time for text",
    "tags": [
      "death",
      "life"
    ]
  },
  {
    "author": "J.M. Barrie",
    "text": "“To die will be an awfully big adventure.”",
    "tags": [
      "adventure",
      "love"
    ]
  },
  {
    "author": "E.E. Cummings",
    "text": "“It takes courage to grow up and become who you re",
    "tags": [
      "courage"
    ]
  },
  {
    "author": "Khaled Hosseini",
    "text": "“But better to get hurt by the truth than comforte",
    "tags": [
      "life"
    ]
  },
  {
    "author": "Harper Lee",
    "text": "“You never really understand a person until you co",
    "tags": [
      "better-life-empathy"
    ]
  },
  {
    "author": "Madeleine L'Engle",
    "text": "“You have to write the book that wants to be writt",
    "tags": [
      "books",
      "children",
      "difficult",
      "grown-ups",
      "write",
      "writers",
      "writing"
    ]
  },
  {
    "author": "Mark Twain",
    "text": "“Never tell the truth to people who are not worthy",
    "tags": [
      "truth"
    ]
  },
  {
    "author": "Dr. Seuss",
    "text": "“A person's a person, no matter how small.”",
    "tags": [
      "inspirational"
    ]
  },
  {
    "author": "George R.R. Martin",
    "text": "“... a mind needs books as a sword needs a whetsto",
    "tags": [
      "books",
      "mind"
    ]
  }
]

/// *********************************************************************
/// *********************************************************************
/// *********************************************************************
/// *********************************************************************

const authors = [
  {
    "name": "Albert Einstein",
    "biography": "In 1879, Albert Einstein was born in Ulm, Germany.",
    "birthdate": "March 14, 1879",
    "location": "in Ulm, Germany"
  },
  {
    "name": "J.K. Rowling",
    "biography": "See also: Robert GalbraithAlthough she writes unde",
    "birthdate": "July 31, 1965",
    "location": "in Yate, South Gloucestershire, England, The United Kingdom"
  },
  {
    "name": "Jane Austen",
    "biography": "Jane Austen was an English novelist whose works of",
    "birthdate": "December 16, 1775",
    "location": "in Steventon Rectory, Hampshire, The United Kingdom"
  },
  {
    "name": "Marilyn Monroe",
    "biography": "Marilyn Monroe (born Norma Jeane Mortenson; June 1",
    "birthdate": "June 01, 1926",
    "location": "in The United States"
  },
  {
    "name": "André Gide",
    "biography": "André Paul Guillaume Gide was a French author and sdsd",
    "birthdate": "November 22, 1869",
    "location": "in Paris, France"
  },
  {
    "name": "Thomas A. Edison",
    "biography": "Thomas Alva Edison was an American inventor, scien",
    "birthdate": "February 11, 1847",
    "location": "in Milan, Ohio, The United States"
  },
  {
    "name": "Eleanor Roosevelt",
    "biography": "Anna Eleanor Roosevelt was an American political l",
    "birthdate": "October 11, 1884",
    "location": "in The United States"
  },
  {
    "name": "Steve Martin",
    "biography": "Stephen Glenn \"Steve\" Martin is an American actor,",
    "birthdate": "August 14, 1945",
    "location": "in Waco, Texas, The United States"
  },
  {
    "name": "Bob Marley",
    "biography": "Robert \"Bob\" Nesta Marley OM was a Jamaican singer",
    "birthdate": "February 06, 1945",
    "location": "in Nine Mile, Saint Ann, Jamaica"
  },
  {
    "name": "Dr. Seuss",
    "biography": "Theodor Seuss Geisel was born 2 March 1904 in Spri",
    "birthdate": "March 02, 1904",
    "location": "in Springfield, MA, The United States"
  },
  {
    "name": "Douglas Adams",
    "biography": "Douglas Noël Adams was an English author, comic ra",
    "birthdate": "March 11, 1952",
    "location": "in Cambridge, England, The United Kingdom"
  },
  {
    "name": "Elie Wiesel",
    "biography": "Eliezer Wiesel was a Romania-born American novelis",
    "birthdate": "September 30, 1928",
    "location": "in Sighet, Romania"
  },
  {
    "name": "Friedrich Nietzsche",
    "biography": "Friedrich Wilhelm Nietzsche (1844–1900) is a Germa",
    "birthdate": "October 15, 1844",
    "location": "in Röcken bei Lützen, Prussian Province of Saxony, Germany"
  },
  {
    "name": "Mark Twain",
    "biography": "Samuel Langhorne Clemens, better known by his pen sdf",
    "birthdate": "November 30, 1835",
    "location": "in Florida, Missouri, The United States"
  },
  {
    "name": "Allen Saunders",
    "biography": "Allen Saunders was an American writer, journalist sdfsd",
    "birthdate": "April 24, 1899",
    "location": "in The United States"
  },
  {
    "name": "Pablo Neruda",
    "biography": "Pablo Neruda was the pen name and, later, legal na",
    "birthdate": "July 12, 1904",
    "location": "in Parral, Chile"
  },
  {
    "name": "Ralph Waldo Emerson",
    "biography": "in 1803, Ralph Waldo Emerson was born in Boston. E",
    "birthdate": "May 25, 1803",
    "location": "in Boston, Massachusetts, The United States"
  },
  {
    "name": "Mother Teresa",
    "biography": "Blessed Teresa of Calcutta, or Mother Teresa, born",
    "birthdate": "August 26, 1910",
    "location": "in Skopje, Macedonia, the Former Yugoslav Republic of"
  },
  {
    "name": "Garrison Keillor",
    "biography": "Garrison Keillor (born Gary Edward Keillor on Augu",
    "birthdate": "August 07, 1942",
    "location": "in Anoka, Minnesota, The United States"
  },
  {
    "name": "Jim Henson",
    "biography": "James Maury \"Jim\" Henson was the most widely known",
    "birthdate": "September 24, 1936",
    "location": "in Greenville, Mississippi, The United States"
  },
  {
    "name": "Charles M. Schulz",
    "biography": "Charles Monroe Schulz was an American cartoonist, text",
    "birthdate": "November 26, 1922",
    "location": "in Minneapolis, MN, The United States"
  },
  {
    "name": "William Nicholson",
    "biography": "Librarian Note: There is more than one author in t",
    "birthdate": "January 12, 1948",
    "location": "in Lewes, Sussex, The United Kingdom"
  },
  {
    "name": "Jorge Luis Borges",
    "biography": "Jorge Francisco Isidoro Luis Borges Acevedo (Spani",
    "birthdate": "August 24, 1899",
    "location": "in Buenos Aires, Argentina"
  },
  {
    "name": "George Eliot",
    "biography": "In 1819, novelist George Eliot (nee Mary Ann Evans",
    "birthdate": "November 22, 1819",
    "location": "in South Farm, Arbury Hall, Nuneaton, Warwickshire, The United Kingdom"
  },
  {
    "name": "George R.R. Martin",
    "biography": "George R. R. Martin was born September 20, 1948, i",
    "birthdate": "September 20, 1948",
    "location": "in Bayonne, New Jersey, The United States"
  },
  {
    "name": "C.S. Lewis",
    "biography": "CLIVE STAPLES LEWIS (1898–1963) was one of the int",
    "birthdate": "November 29, 1898",
    "location": "in Belfast, Ireland"
  },
  {
    "name": "Martin Luther King Jr.",
    "biography": "Martin Luther King, Jr. was one of the pivotal lea",
    "birthdate": "January 15, 1929",
    "location": "in Atlanta, Georgia, The United States"
  },
  {
    "name": "James Baldwin",
    "biography": "Librarian Note: There is more than one author in t",
    "birthdate": "August 02, 1924",
    "location": "in Harlem, New York, The United States"
  },
  {
    "name": "Haruki Murakami",
    "biography": "Haruki Murakami (Japanese: 村上 春樹) is a popular con",
    "birthdate": "January 12, 1949",
    "location": "in Kyoto, Japan"
  },
  {
    "name": "Alexandre Dumas-fils",
    "biography": "Alexandre Dumas (son) was born in Paris, France, t",
    "birthdate": "July 27, 1824",
    "location": "in Paris, France"
  },
  {
    "name": "Stephenie Meyer",
    "biography": "I was born in Connecticut in 1973, during a brief text",
    "birthdate": "December 24, 1973",
    "location": "in Connecticut, The United States"
  },
  {
    "name": "Ernest Hemingway",
    "biography": "Ernest Miller Hemingway was an American author and",
    "birthdate": "July 21, 1899",
    "location": "in Oak Park, Illinois, The United States"
  },
  {
    "name": "Helen Keller",
    "biography": "Helen Keller would not be bound by conditions. Ren",
    "birthdate": "June 27, 1880",
    "location": "in Tuscumbia, Alabama, The United States"
  },
  {
    "name": "George Bernard Shaw",
    "biography": "George Bernard Shaw was an Irish playwright, socia",
    "birthdate": "July 26, 1856",
    "location": "in Dublin, Ireland"
  },
  {
    "name": "Charles Bukowski",
    "biography": "Henry Charles Bukowski (born as Heinrich Karl Buko",
    "birthdate": "August 16, 1920",
    "location": "in Andernach, Germany"
  },
  {
    "name": "Suzanne Collins",
    "biography": "Librarian Note: There is more than one author in t",
    "birthdate": "August 11, 1962",
    "location": "in Hartford, Connecticut, The United States"
  },
  {
    "name": "J.R.R. Tolkien",
    "biography": "John Ronald Reuel Tolkien, CBE, was an English wri",
    "birthdate": "January 03, 1892",
    "location": "in Bloemfontein, Mangaung, Free State, South Africa"
  },
  {
    "name": "Alfred Tennyson",
    "biography": "Alfred Tennyson was born in Somersby, Lincolnshire",
    "birthdate": "August 06, 1809",
    "location": "in Somersby, Lincolnshire, The United Kingdom"
  },
  {
    "name": "Terry Pratchett",
    "biography": "Sir Terry Pratchett sold his first story when he w",
    "birthdate": "April 28, 1948",
    "location": "in Beaconsfield, Buckinghamshire, England, The United Kingdom"
  },
  {
    "name": "J.D. Salinger",
    "biography": "Jerome David Salinger was an American author, best",
    "birthdate": "January 01, 1919",
    "location": "in Manhattan, New York, The United States"
  },
  {
    "name": "George Carlin",
    "biography": "George Denis Patrick Carlin was a Grammy-winning A",
    "birthdate": "May 12, 1937",
    "location": "in New York, New York, The United States"
  },
  {
    "name": "John Lennon",
    "biography": "John Winston Ono Lennon, MBE, was an English singe",
    "birthdate": "October 09, 1940",
    "location": "in Liverpool, England, The United Kingdom"
  },
  {
    "name": "W.C. Fields",
    "biography": "W. C. Fields was born William Claude Dukenfield, t",
    "birthdate": "January 29, 1880",
    "location": "in Darby, Pennsylvania, The United States"
  },
  {
    "name": "Ayn Rand",
    "biography": "Alisa Rosenbaum was born in pre-revolutionary St. text",
    "birthdate": "February 02, 1905",
    "location": "in St. Petersburg, Russian Federation"
  },
  {
    "name": "Jimi Hendrix",
    "biography": "Jimi Hendrix was an American guitarist, singer and",
    "birthdate": "November 27, 1942",
    "location": "in Seattle, Washington, The United States"
  },
  {
    "name": "J.M. Barrie",
    "biography": "Sir James Matthew Barrie, 1st Baronet, OM (9 May 1",
    "birthdate": "May 09, 1860",
    "location": "in Kirriemuir, Angus, Scotland, The United Kingdom"
  },
  {
    "name": "E.E. Cummings",
    "biography": "Edward Estlin Cummings was born in Cambridge, Mass",
    "birthdate": "October 14, 1894",
    "location": "in Cambridge, Massachusetts, The United States"
  },
  {
    "name": "Khaled Hosseini",
    "biography": "Hosseini was born in Kabul, Afghanistan, in 1965. text",
    "birthdate": "March 04, 1965",
    "location": "in Kabul, Afghanistan"
  },
  {
    "name": "Harper Lee",
    "biography": "Harper Lee, known as Nelle, was born in the Alabam",
    "birthdate": "April 28, 1926",
    "location": "in Monroeville, Alabama, The United States"
  },
  {
    "name": "Madeleine L'Engle",
    "biography": "Madeleine L'Engle was an American writer best know",
    "birthdate": "November 29, 1918",
    "location": "in New York City, New York, The United States"
  }
];