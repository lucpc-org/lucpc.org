const LEETCODE_API_ENDPOINT = 'http://www.whateverorigin.org/get?url=https://leetcode.com/graphql'
const DAILY_CODING_CHALLENGE_QUERY = `
query questionOfToday {
	activeDailyCodingChallengeQuestion {
		date
		userStatus
		link
		question {
			acRate
			difficulty
			freqBar
			frontendQuestionId: questionFrontendId
			isFavor
			paidOnly: isPaidOnly
			status
			title
			titleSlug
			hasVideoSolution
			hasSolution
			topicTags {
				name
				id
				slug
			}
		}
	}
}
`

// We can pass the JSON response as an object to our createTodoistTask later.
const fetchDailyCodingChallenge = async () => {
    console.log(`Fetching daily coding challenge from LeetCode API.`)
    console.log(JSON.stringify({ query: DAILY_CODING_CHALLENGE_QUERY }))
    try {
      let response = await fetch(LEETCODE_API_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: DAILY_CODING_CHALLENGE_QUERY })
      })

      return response.json();

    } catch (e) {
      console.log(e);
    }
}
