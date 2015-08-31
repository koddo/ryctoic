(ns ryctoic.async-error-handling-helpers)

(defn error? [x]
  (instance? js/Error x))

(defn throw-err [e]
  (when (error? e) (throw e))
  e)
